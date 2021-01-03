import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLogged : boolean = true;

  constructor() { }

  isUserLoggedIn(){
    return this.isUserLogged;
  }

  signIn(email : string, password: string){
    return this.isUserLogged = true;
  }

  signUp(username: string, email : string, password: string){
    return true;
  }

  logout(){
    this.isUserLogged = false;
  }
}
