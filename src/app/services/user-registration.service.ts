import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  baseUrl = environment.baseUrl;

  _url= this.baseUrl+"registration";

  constructor(private http: HttpClient) { }

  register(userData: User)
  {
    return this.http.post<User>(this._url, userData)
  }
}
