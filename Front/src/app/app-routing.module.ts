import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule)
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
