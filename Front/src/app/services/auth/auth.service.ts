import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from 'src/app/interfaces/userRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  authRegister(user: UserRegister) {
    return this.http.post<any>(`http://localhost:3001/users/register`, user)
  }

  authLogin(user: UserRegister){
    return this.http.post<any>(`http://localhost:3001/users/login`, user)
  }
}
