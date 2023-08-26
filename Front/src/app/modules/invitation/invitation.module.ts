import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationRoutingModule } from './invitation-routing.module';
import { InvitationPageComponent } from './pages/invitation-page/invitation-page.component';
import { LoginDialogComponent } from './pages/login-dialog/login-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InvitationPageComponent,
    LoginDialogComponent
  ],
  imports: [
    CommonModule,
    InvitationRoutingModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class InvitationModule { }
