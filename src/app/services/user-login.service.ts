import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  _url: string = "https://kitchen-story-spring-angular.herokuapp.com/authenticate";

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user: Login)
  {
    return this.http.post<any>(this._url, user);
  }

  loggedIn()
  {
    return !!localStorage.getItem('token');
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  logoutUser()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('items');
    this.router.navigate(['home']);
  }
  
}
