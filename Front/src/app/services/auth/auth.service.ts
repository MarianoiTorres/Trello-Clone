import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from 'src/app/interfaces/userRegister';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/state/selectors/user.selectors';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient, public store: Store<any>, public router: Router) { }

  authRegister(user: UserRegister) {
    return this.http.post<any>(`https://nice-red-monkey-sock.cyclic.app/users/register`, user)
  }

  authLogin(user: any){
    return this.http.post(`https://nice-red-monkey-sock.cyclic.app/users/login`, user)
  }

  addProjectId(projectId: string, userId: string) {
    return this.http.put(`https://nice-red-monkey-sock.cyclic.app/users/${projectId}`, {userId})
  }

  isLoggedIn$(): Observable<boolean> {
    return this.store.select(selectUser).pipe(
      map(user => {
        if(user.name)
        {
          return true
        }
        else
        {
          return false
        }
      })
    );
  }
}
