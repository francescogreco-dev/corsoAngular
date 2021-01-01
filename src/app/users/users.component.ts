import { UserInterface } from './../interfaces/User';
import { UserService } from '../services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './../classes/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  title = 'Users';
  users: User[] = [];
  @Output() updateUser = new EventEmitter<User>();
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res.data;
      }
    )
  }

  onDeleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(
      (response) => {
        if (response.success == true) {
          alert(response.message);
          this.userService.getUsers().subscribe(res => {this.users = res.data});
        } else {
          alert(response.message);
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }
}
