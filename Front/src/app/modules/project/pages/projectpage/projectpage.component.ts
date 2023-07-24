import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTasksService } from 'src/app/services/get-tasks/get-tasks.service';
import { NewTaskToCreate } from './interfaces';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.css'],
})
export class ProjectpageComponent {
  constructor(
    public route: ActivatedRoute,
    public getTasksService: GetTasksService
  ) {}

  projectId: string = '';
  mostrar: string = '';

  newTaskToCreate: NewTaskToCreate = {
    projectId: '',
    name: '',
    state: '',
  };

  private draggedTask: any 

  allTasks: any = []
  lista: any = [];
  proceso: any = [];
  hecho: any = [];


  ngOnInit() {
    this.route.params.subscribe((value) => {
      this.projectId = value['id'];
      this.getTasksService.getAllTasks(this.projectId).subscribe((value) => {
        this.allTasks = value
        this.lista = this.allTasks.filter((task: any) => task.state === 'lista')
        this.proceso = this.allTasks.filter((task: any) => task.state === 'en proceso')
        this.hecho = this.allTasks.filter((task: any) => task.state === 'hecho')
      })
    })
     
  }

  newTask(state: string) {
    this.mostrar = state;
    this.newTaskToCreate.state = state;
  }

  createNewTask() {
    this.newTaskToCreate.projectId = this.projectId;
    this.getTasksService.createTask(this.newTaskToCreate);
    this.ngOnInit();
  }

  drop(event: CdkDragDrop<NewTaskToCreate[]>, task: string) {
    console.log(event.previousContainer === event.container);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
    else
    {

      const stateTask = {
        state: task
      }
      
      this.getTasksService.updateTask(this.draggedTask._id, stateTask)
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.ngOnInit()

    }
    
  }

  onDragStart(task: object){
    this.draggedTask = task
  }
}
