import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { LandingNavComponent } from './landing-nav/landing-nav.component';



@NgModule({
  declarations: [
    NavComponent,
    LandingNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    LandingNavComponent
  ]
})
export class SharedModule { }
