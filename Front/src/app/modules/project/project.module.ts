import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectpageComponent } from './pages/projectpage/projectpage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  CdkDragPlaceholder
} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { TaskDialogComponent } from './pages/task-dialog/task-dialog.component';

@NgModule({
  declarations: [ProjectpageComponent, TaskDialogComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
    FormsModule,
    CdkDropList,
    CdkDropListGroup,
    CdkDrag,
    CdkDragPlaceholder,
    MatButtonModule,
    MatDialogModule
  ],
})
export class ProjectModule {}
