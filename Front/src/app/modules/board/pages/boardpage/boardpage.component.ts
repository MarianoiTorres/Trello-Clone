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

  ngOnInit() {
    this.getProjectsService.getProjects()
   }
 
   goProject(projectId: string){
     console.log(projectId);
 
     this.router.navigate(['project', projectId])
   }
}
