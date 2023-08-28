import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTasksService } from 'src/app/services/get-tasks/get-tasks.service';
import { NewTaskToCreate } from '../../../../interfaces/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { GetListsService } from 'src/app/services/get-lists/get-lists.service';
import { List } from 'src/app/interfaces/list';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';
import { InvitationComponent } from 'src/app/shared/dialogs/invitation/invitation.component';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.css'],
})
export class ProjectpageComponent {
  constructor(
    public route: ActivatedRoute,
    public getTasksService: GetTasksService,
    public getListsServce: GetListsService,
    public getProjectService: GetProjectsService, 
    public dialog: MatDialog,
  ) {}

  private draggedTask: any;
  
  showMore: boolean = false
  showColorsDiv: boolean = false
  showImageDiv: boolean = false
  showBackgroundMenu: boolean = false
  showMembersMenu: boolean = false
  projectId: string = '';
  mostrar: string = '';

  newTaskToCreate: NewTaskToCreate = {
    projectId: '',
    name: '',
    state: '',
    listId: ''
  };

  newList: boolean = false;
  nameList: string = '';
  listDivs: any = [];

  ngOnInit() {
    this.route.params.subscribe((value) => {
      this.projectId = value['id']
      this.getProjectService.getProjectById(this.projectId)
      this.getListsServce.getLists(this.projectId).subscribe((lists) => {
        const arrayOfList = lists.map(response => {
          return{
            _id: response._id,
            name: response.name,
            tasks: []
          }
        })
        this.listDivs = arrayOfList

        this.getTasksService.getAllTasks(this.projectId).subscribe((tasks) => {
          this.listDivs.forEach((list: any) => {
              tasks.forEach(task => {
                list.name === task.state && list.tasks.push(task)
                if (task.deadline) {
                  const date = new Date(task.deadline);
                  const options: Intl.DateTimeFormatOptions = {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  };
                  const formatter = new Intl.DateTimeFormat("en-US", options);
                  const formattedDate = formatter.format(date);
                  task.deadline = formattedDate
                }
              })
          })
        })
      })
    });
  }

  newTask(list: any) {
    this.mostrar = list.name;
    this.newTaskToCreate.state = list.name;
    this.newTaskToCreate.listId = list._id
  }

  createNewTask() {
    this.newTaskToCreate.projectId = this.projectId;
    this.getTasksService.createTask(this.newTaskToCreate).subscribe((response) => {
      this.listDivs.forEach((list: any) => {
        list.name === response.state && list.tasks.push(response)
      })
    }) 
  }

  drop(event: CdkDragDrop<NewTaskToCreate[]>, list: List) {
    const stateTask = {
      state: list.name,
      listId: list._id
    };
    this.getTasksService.updateTask(this.draggedTask._id, stateTask).subscribe((response: any) => {
      console.log(response);
    });
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  onDragStart(task: object) {
    this.draggedTask = task;
  }

  addNewList() {
    console.log('llegue');
    
    const newList = {
      projectId: this.projectId,
      name: this.nameList
    };
    this.getListsServce.createList(newList).subscribe((response) => {
      this.listDivs.push({...response, tasks: []})
    })

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(InvitationComponent, {
      width: '40%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  getContainerTaskStyles(tasks: any[]): any {
    const minHeight = 25; // Altura mínima
    const itemHeight = 30; // Altura por cada item

    const totalTasks = tasks.length;
    const containerHeight = minHeight + totalTasks * itemHeight;

    return {
      'min-height': `${containerHeight}px`,
      'height': 'fit-content'
    };
  }

  openDialogTask(taskId: string): any {
    this.dialog.open(TaskDialogComponent, {
      width: '45%',
      data: {
        taskId: taskId
      }
    })
  }

  deleteList(listId: string): any {
    this.getListsServce.deleteList(listId).subscribe((response: any) => {
      if(response.acknowledged && response.deletedCount === 1)
      {
        this.listDivs = this.listDivs.filter((list: any) => list._id !== listId)
      }
    })
  }

  changeColor(gradient: string): any {
    this.getProjectService.containerBackgroundImage = gradient;
    this.getProjectService.updateBackground(this.projectId, this.getProjectService.containerBackgroundImage)
  }

  previewSource: any

  onChangeBackground(event: any): any {
    const file = event.target.files[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      this.previewSource = reader.result
    }  
  }

  saveBackgroundImage(): any {
    if(!this.previewSource) return

      this.getProjectService.updateBackground(this.projectId, this.previewSource)
  }

  removeMember(userId: string): any {
    this.getProjectService.deleteMember(this.getProjectService.project.projectId, userId)
  }
}
