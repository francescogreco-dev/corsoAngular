import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from './../classes/User';
import { UserService } from './../services/user.service';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private userCopy: User;
  private __user: User;
  faPencilAlt = faPencilAlt;

  @Output() onCloseForm = new EventEmitter<boolean>();

  @Input() set user(user: User) {
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.user = new User();
    this.route.params.subscribe(
      (params) => {
        if (!params.id) {
          return;
        }
        this.userService.getUser(+params.id).subscribe((u) => {
          this.user = u.data;
        });
      }
    );
  }

  saveUser() {
    if (this.user.id > 0) {
      this.updateUser();
    } else {
      // if (this.user.name != '') {
      //   this.userService.createUser(this.user);
      //   this.router.navigate(['users']);
      // } else {
      //   alert('compilare tutti i campi!');
      // }
      this.createUser();
    }
  }

  resetForm(form) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }

  }

  closeFormEvent() {
    this.onCloseForm.emit(false);
  }
  backToUsers() {
    this.router.navigate(['users']);
  }

  updateUser() {
    this.userService.updateUser(this.user).subscribe(
      (response) => {
        if (response.success == true) {
          alert(response.message);
          this.router.navigate(['users']);
        } else {
          alert(response.message);
        }
      }
    );
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(
      (response) => {
        alert(response.message);
        if (response.success == true) {
          this.router.navigate(['users']);
        }
      }
    )
  }

}
