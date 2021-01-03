import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from './../classes/User';
import { AuthService } from '../services/auth.service';
import { RouteGuardService } from '../route-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() onNewUser = new EventEmitter();
  private isUserLOggedIn: boolean = false;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isUserLOggedIn = this.auth.isUserLoggedIn();
  }

  newUser() {
    this.onNewUser.emit()
  }

  logout(e: Event){
    e.preventDefault();
    this.auth.logout();
    this.isUserLOggedIn = false;
    this.router.navigate(['login']);
  }

}
