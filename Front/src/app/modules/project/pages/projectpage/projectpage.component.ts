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

  constructor(public route: ActivatedRoute, public getTasksService: GetTasksService){
  }

  ngOnInit(){
    this.route.params.subscribe((value) => {
      this.projectId = value['id']
      this.getTasksService.getAllTasks(this.projectId)
    })
  }
}
