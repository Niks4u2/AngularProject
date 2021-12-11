import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  _url: string = "http://localhost:5000/authenticate";

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
