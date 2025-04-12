export class User {
  userId: number;
  name: string;
  surname: string;
  email: string;
  password: string;

  constructor(){
    this.userId = 0;
    this.name = '';
    this.surname = '';
    this.email = '';
    this.password = '';
  }
}
