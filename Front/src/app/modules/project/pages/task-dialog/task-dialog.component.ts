import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetTasksService } from 'src/app/services/get-tasks/get-tasks.service';
import { DialogRef } from '@angular/cdk/dialog';
import { ComentsService } from 'src/app/services/coments/coments.service';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css'],
})
export class TaskDialogComponent {
  
  taskId: string = '';
  userId: string = ''
  task: any = {};
  comment: string = ''
  edit: boolean = false
  showMembers: boolean = false
  showCalendar: boolean = false
  showConfirmation: boolean = false

  constructor(
    public dialogRef: DialogRef,
    public commentService: ComentsService,
    public projectService: GetProjectsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public taskService: GetTasksService
    ) {
      this.taskId = data.taskId;
    }
    
    selected: Date | null = null;

  ngOnInit(): any {
    console.log(this.projectService.project);
    
    this.userId = localStorage.getItem('userId')!
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
        response.description ? this.edit = true : this.edit = false
      });
      this.task = response;
      console.log(this.task);
    });
  }

  saveDescription(): any {
    this.taskService.updateTask(this.taskId, {description: this.task.description}).subscribe((response: any) => {
      if (response.acknowledged && response.modifiedCount === 1) {
        this.task.description = this.task.description;
        this.edit = !this.edit
      }
    })
  }

  addComment(): any {
    this.commentService.createComment(this.userId, this.taskId, this.comment).subscribe((response: any) => {
      if(response.createdAt)
      {
        this.taskService.updateTask(this.taskId, {coments: [response._id]}).subscribe((response: any) => {
          if (response.acknowledged && response.modifiedCount === 1) {
            this.ngOnInit()
            this.comment = ''
          }
        })
      }
    })
  }

  addMember(userId?: string): any {
    this.taskService.updateTask(this.taskId, {member: [userId ? userId : this.userId]}).subscribe((response: any) => {
      console.log(response);
      
    }, (error) => {console.log(error);
    })
  }

  deleteTask(): any {
    this.taskService.deleteTask(this.taskId).subscribe((response: any) => {
      if(response.acknowledged)
      {
        this.dialogRef.close()
      }
      console.log(response);
      
    })
  }

  updateDeadline(): any {
    this.taskService.updateTask(this.taskId, {deadline: this.selected}).subscribe((response: any) => {
      this.showCalendar = !this.showCalendar
    })
  }
}
