import { Injectable } from '@angular/core';
import { UserInterface } from './../interfaces/User';
import { User } from './../classes/User';
import { HttpClient } from '@angular/common/http';

interface UsersResponse {
  data: User[];
  message: string;
  success: boolean;
}

interface UserResponse {
  data: User;
  message: string;
  success: boolean;
}

@Injectable()

export class UserService {

  // users: User[] = [
  //   {
  //     id: 1,
  //     name: 'Francesco',
  //     lastname: 'Greco',
  //     email: 'test.test@test.it',
  //     fiscalcode: 'grcfnc79d21g273u',
  //     province: 'palermo',
  //     phone: '3664583151'
  //   },
  //   {
  //     id: 2,
  //     name: 'Ciccio',
  //     lastname: 'Valenti',
  //     email: 'test.test@test.it',
  //     fiscalcode: 'grcfnc79d21g273u',
  //     province: 'palermo',
  //     phone: '3664583151'
  //   },
  //   {
  //     id: 3,
  //     name: 'Ciccio',
  //     lastname: 'Palermo',
  //     email: 'test.test@test.it',
  //     fiscalcode: 'grcfnc79d21g273u',
  //     province: 'palermo',
  //     phone: '3664583151'
  //   },
  //   {
  //     id: 4,
  //     name: 'Ciccio',
  //     lastname: 'Iervolino',
  //     email: 'test.test@test.it',
  //     fiscalcode: 'grcfnc79d21g273u',
  //     province: 'palermo',
  //     phone: '3664583151'
  //   },
  //   {
  //     id: 5,
  //     name: 'Ciccio',
  //     lastname: 'Castagna',
  //     email: 'test.test@test.it',
  //     fiscalcode: 'grcfnc79d21g273u',
  //     province: 'palermo',
  //     phone: '3664583151'
  //   }
  // ];

  users: User[] = [];
  private APIURL = 'http://localhost:8000/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    // return this.users;
    return this.http.get<UsersResponse>(this.APIURL);
  }

  getUser(id: number) {
    // return this.users.find(user => user.id === id);
    return this.http.get<UserResponse>(this.APIURL + '/' + id);
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  updateUser(user: User) {
    return this.http.patch<UserResponse>(this.APIURL + '/' + user.id, user);
    // const idx = this.users.findIndex((v) => v.id === user.id);
    // if (idx != -1) {
    //   this.users[idx] = user;
    // }
  }

  createUser(user: User) {
    // user.id = this.users.length + 1;
    // this.users.splice(0, 0, user);
    return this.http.post<UserResponse>(this.APIURL, user);
  }

}
