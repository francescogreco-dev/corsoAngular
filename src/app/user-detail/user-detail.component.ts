import { Component, Input, OnInit } from '@angular/core';
import { User } from './../classes/User';
import { UserService } from './../services/user.service';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private userCopy: User;
  private __user: User;
  faPencilAlt = faPencilAlt;
  @Input() set user(user: User) {
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      if (this.user.name != '') {
        this.userService.createUser(this.user);
      } else {
        alert('compilare tutti i campi!');
      }
    }
  }

  resetForm(form) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }

  }

}
