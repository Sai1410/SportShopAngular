import { User } from '../Classes/User';
import { UserData } from '../Classes/userData';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    .set('Authorization', 'my-auth-token')
};

@Injectable()
export class AuthService {
  baseUrlUsers = 'http://localhost:5000/login';
  message = '';
  constructor(private http: HttpClient) { }
  
   login(user: UserData): Observable<any> {
     
      return this.http.post(this.baseUrlUsers, user, httpOptions).pipe(
      catchError(this.handleError('login', []))
    );
   
   }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.status}`) ;
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }  
}
