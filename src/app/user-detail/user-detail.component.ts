import { Component, Input, OnInit } from '@angular/core';
import { User } from './../classes/User';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
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
      form.reset();
    }

  }

}
