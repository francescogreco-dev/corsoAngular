import { UserInterface } from './../interfaces/User';

export class User implements UserInterface {
  id: number = 0;
  name: string = '';
  lastname: string = '';
  email: string = '';
  fiscalcode: string = '';
  province: string = '';
  phone: string = '';
}
