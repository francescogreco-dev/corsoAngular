import { Injectable } from '@angular/core';
import { UserInterface } from './../interfaces/User';
import { User } from './../classes/User';


@Injectable()

export class UserService {

  users: User[] = [
    {
      id: 1,
      name: 'Francesco',
      lastname: 'Greco',
      email: 'test.test@test.it',
      fiscalcode: 'grcfnc79d21g273u',
      province: 'palermo',
      phone: '3664583151'
    },
    {
      id: 2,
      name: 'Ciccio',
      lastname: 'Valenti',
      email: 'test.test@test.it',
      fiscalcode: 'grcfnc79d21g273u',
      province: 'palermo',
      phone: '3664583151'
    },
    {
      id: 3,
      name: 'Ciccio',
      lastname: 'Palermo',
      email: 'test.test@test.it',
      fiscalcode: 'grcfnc79d21g273u',
      province: 'palermo',
      phone: '3664583151'
    },
    {
      id: 4,
      name: 'Ciccio',
      lastname: 'Iervolino',
      email: 'test.test@test.it',
      fiscalcode: 'grcfnc79d21g273u',
      province: 'palermo',
      phone: '3664583151'
    },
    {
      id: 5,
      name: 'Ciccio',
      lastname: 'Castagna',
      email: 'test.test@test.it',
      fiscalcode: 'grcfnc79d21g273u',
      province: 'palermo',
      phone: '3664583151'
    }
  ];
  constructor() { }

  getUsers() {
    return this.users;
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  saveUser(user: User) {

  }

  updateUser(user: User) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    if (idx != -1) {
      this.users[idx] = user;
    }
  }

}
