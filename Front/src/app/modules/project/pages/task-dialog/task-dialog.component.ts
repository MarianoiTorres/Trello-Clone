import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetTasksService } from 'src/app/services/get-tasks/get-tasks.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css'],
})
export class TaskDialogComponent {
  taskId: string = '';
  task: any = {};

  constructor(
    public dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public taskService: GetTasksService
  ) {
    this.taskId = data.taskId;
  }

  ngOnInit(): any {
    this.taskService.getTaskById(this.taskId).subscribe((response: any) => {
      response.coments.map((comment: any) => {
        const date = new Date(comment.createdAt);
        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedDate = formatter.format(date);
        comment.createdAt = formattedDate;
      });
      this.task = response;
      console.log(this.task);
    });
  }
}
