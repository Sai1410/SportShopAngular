import { User } from '../Classes/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    .set('Authorization', 'my-auth-token')
};

@Injectable()
export class RegistrationService {
  
  baseUrlUsers = 'http://localhost:5000/users';
  
  
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrlUsers);
  }  
  
  validateName(name: string): string {
    
    const validRegEx = /[^,\s] \W [^,\s]|\d/;
      if (validRegEx.test(name) || name == null || name === '') {
        return 'Insert Name';
      }
  }
  
  validateAddress(address: string): string {
    if (address == null || address === '') {
          return 'Insert Address';
        }
  }
  validatePass(pass: string): string {
    
    if (pass.length > 24 || pass.length < 4 || pass == null || pass === '') {
      return 'Insert proper password between 4-24 characters';
    }
  }
  
  validateSurname(Surname: string): string {
    if (Surname == null || Surname === '') {
          return 'Insert Surname';
        }
  }
   
  validateLogin(login: string, users: User[]): string {
    
    for (const u of users){ 
      if (u.login === login) {
        return 'This login is already taken';
      }
    
    }
    if (login.length > 24 || login.length < 4 || login == null || login === '') {
          return 'Insert proper login between 4-24 characters';
        }
  }

  addUser(user: User): Observable<User> {
    const temp = new User(null, user.login, user.password, user.name, user.surname, user.address);
    
    return this.http.post<User>(this.baseUrlUsers, temp, httpOptions);
  }
  
  
}
