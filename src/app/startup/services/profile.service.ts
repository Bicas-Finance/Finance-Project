import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {User} from '../model/models/user.entity';
import {catchError, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService<User> {

  constructor() {
    super();
    this.resourceEndPoint = '/user';
  }

  SignUp(user: User): Observable<User> {
    return this.create(user);
  }
  SignIn(email: string, password: string): Observable<User[]>{
    const filter = `?email=${email}&password=${password}`;
    return this.http.get<User[]>(`${this.resourcePath()}/${filter}`, this.httpOptions)
      .pipe(catchError(this.handleError),
        tap(users =>{
          if(users.length > 0){
            const loggedUser = users[0];
            if(loggedUser.userId !== undefined){
              localStorage.setItem('userId', loggedUser.userId.toString());
            }else{
              console.error('Error: userId is undefined');
            }
          }else{
            console.error('No user was found with the provided credentials');
          }
        })
      );
  }
  getUserId(): string | null{
    return localStorage.getItem('userId');
  }
  getAllUsers(): Observable<Array<User>> {
    return this.getAll();
  }
  logOut(): void{
    localStorage.removeItem('userId');
  }
}
