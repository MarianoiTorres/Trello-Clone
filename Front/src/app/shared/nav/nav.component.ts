import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'
import { createNewProject } from 'src/app/state/actions/project.action';
import { searchProjects } from 'src/app/state/selectors/projects.selectors';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public route: Router, private store: Store<any>){}

  show: boolean = false
  name: string = ''
  showProjectsDiv: boolean = false

  createNewProject(): any {
    const userId = JSON.parse(localStorage.getItem('userId')!)
    const project = {
      name: this.name,
      userCreator: userId!,
      member: [userId!]
    }
    this.store.dispatch(createNewProject({project}))
  }

  goBoardPage(): any {
    this.route.navigate(['board'])
  }

  projectsFiltered: any = []
  projectName: any = ''
  searchProject(event: any): any {
    this.store.select(searchProjects, {name: this.projectName}).subscribe((projects: any) => {
      this.projectsFiltered = projects
    })
  }
  
}
