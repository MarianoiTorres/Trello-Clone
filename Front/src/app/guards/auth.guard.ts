import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = new Router()
  return inject(AuthService).isLoggedIn$().pipe(
  map(isLoggedIn => {
    if (isLoggedIn) {
      return true;
    } else {
      router.createUrlTree(['/']); 
      return false
    }
  }))
  
};
