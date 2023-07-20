import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTasksService } from 'src/app/services/get-tasks/get-tasks.service';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.css']
})
export class ProjectpageComponent {

  projectId: string = ''
  mostrar: string = ''

  newTaskToCreate: any = {
    projectId: '',
    name: '',
    state: ''
  }

  constructor(public route: ActivatedRoute, public getTasksService: GetTasksService){
  }

  ngOnInit(){
    this.route.params.subscribe((value) => {
      this.projectId = value['id']
      this.getTasksService.getAllTasks(this.projectId)
    })
  }

  newTask(state: string){
      this.mostrar = state
      this.newTaskToCreate.state = state
  }

  createNewTask(){
    this.newTaskToCreate.projectId = this.projectId
    console.log(this.newTaskToCreate);
    
    this.getTasksService.createTask(this.newTaskToCreate)
    this.ngOnInit()
  }
}
