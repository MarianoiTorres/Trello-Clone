import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardpageComponent } from './pages/boardpage/boardpage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmdialogComponent } from './pages/confirmdialog/confirmdialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    BoardpageComponent,
    ConfirmdialogComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
    MatDialogModule
  ]
})
export class BoardModule { }
