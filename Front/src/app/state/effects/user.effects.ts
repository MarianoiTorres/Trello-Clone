import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth/auth.service';
import { loadUser, userLoaded } from '../actions/user.action';
import { EMPTY, catchError, exhaustMap, map } from 'rxjs';

@Injectable()
export class UserEffects {
    
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      exhaustMap(action =>
        this.userService.authLogin(action.data).pipe(
          map((user) => {
            console.log(user)
            return userLoaded({ user })}),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: AuthService) {}
}
