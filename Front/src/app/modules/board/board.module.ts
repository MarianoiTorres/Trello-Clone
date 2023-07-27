import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardpageComponent } from './pages/boardpage/boardpage.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BoardpageComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule
  ]
})
export class BoardModule { }
