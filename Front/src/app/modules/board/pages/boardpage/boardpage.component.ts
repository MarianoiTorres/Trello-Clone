import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';

@Component({
  selector: 'app-boardpage',
  templateUrl: './boardpage.component.html',
  styleUrls: ['./boardpage.component.css']
})
export class BoardpageComponent {
  constructor(public getProjectsService: GetProjectsService, public router: Router){}

  projects: any = []

  ngOnInit() {
    const userId = localStorage.getItem('userId')
    this.getProjectsService.getProjects(userId!)
   }
 
   goProject(projectId: string){
     this.router.navigate(['project', projectId])
   }
}
