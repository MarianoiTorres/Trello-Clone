import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'
import { createNewProject } from 'src/app/state/actions/project.action';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public route: Router, private store: Store<any>){}

  show: boolean = false
  name: string = ''

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
}
