import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { LandingNavComponent } from './landing-nav/landing-nav.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavComponent,
    LandingNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavComponent,
    LandingNavComponent
  ]
})
export class SharedModule { }
