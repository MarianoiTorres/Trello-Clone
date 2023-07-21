import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTasksService } from 'src/app/services/get-tasks/get-tasks.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { NewTaskToCreate } from './interfaces';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.css'],
})
export class ProjectpageComponent {
  projectId: string = '';
  mostrar: string = '';

  newTaskToCreate: NewTaskToCreate = {
    projectId: '',
    name: '',
    state: '',
  };

  constructor(
    public route: ActivatedRoute,
    public getTasksService: GetTasksService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((value) => {
      this.projectId = value['id'];
      this.getTasksService.getAllTasks(this.projectId);
    });
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

  dragAndDrop(event: CdkDragDrop<NewTaskToCreate[]>, estado?: string) {
    
    
    console.log(event.previousContainer.id)
    const movedTask = event.item.data;
    
    if (movedTask.state !== estado) {
      movedTask.state = estado;

      console.log(movedTask)
      
      
    }
  }
}
