import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from './../classes/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() onNewUser = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  newUser() {
    this.onNewUser.emit()
  }

}
