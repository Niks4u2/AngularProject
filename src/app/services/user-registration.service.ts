import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  _url="http://localhost:5000/registration";

  constructor(private http: HttpClient) { }

  register(userData: User)
  {
    return this.http.post<User>(this._url, userData)
  }
}
