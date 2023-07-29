import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { LandingNavComponent } from './landing-nav/landing-nav.component';
import { FormsModule } from '@angular/forms';
import { InvitationComponent } from './dialogs/invitation/invitation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    NavComponent,
    LandingNavComponent,
    InvitationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    NavComponent,
    LandingNavComponent,
    InvitationComponent
  ]
})
export class SharedModule { }
