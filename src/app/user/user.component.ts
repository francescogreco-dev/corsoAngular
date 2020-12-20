import { UserService } from '../services/user.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { UserInterface } from './../interfaces/User';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../classes/User';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();
  faPen = faPencilAlt;
  fatrah = faTrashAlt;
  constructor(private userService: UserService) {

  }

  ngOnInit() {
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    this.onSelectUser.emit(this.user)
  }

}
