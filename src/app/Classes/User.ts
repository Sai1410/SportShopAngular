export class User {
  _id: string;
  login: string;
  password: string;
  name: string;
  surname: string;
  address: string;
  order_id: string;
  
  constructor(id: string, login: string, password: string, name: string, surname: string, address: string) { 
    this._id = id;
    this.login = login;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.address = address;
  }
}
