import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(public getProjectsService: GetProjectsService, public router: Router){}

  ngOnInit() {
   this.getProjectsService.getProjects()
  }

  goProject(projectId: string){
    console.log(projectId);

    this.router.navigate(['project', projectId])
  }
}
