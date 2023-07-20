import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectpageComponent } from './pages/projectpage/projectpage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProjectpageComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProjectModule { }
