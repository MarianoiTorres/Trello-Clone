import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router'
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'project/:id',
    loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'board',
    loadChildren: () => import('./modules/board/board.module').then((m) => m.BoardModule),
    canActivate: [authGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'accept-board/:id',
    loadChildren: () => import('./modules/invitation/invitation.module').then((m) => m.InvitationModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
