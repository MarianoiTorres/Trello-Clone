import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public projectService: GetProjectsService, public route: Router){}

  show: boolean = false
  name: string = ''

  createNewProject(): any {
    const userId = localStorage.getItem('userId')
    const project = {
      name: this.name,
      userCreator: userId!,
      member: [userId!]
    }
    this.projectService.createProject(project)    
  }

  goBoardPage(): any {
    this.route.navigate(['board'])
  }
}
