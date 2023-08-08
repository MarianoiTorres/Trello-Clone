import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComentsService } from 'src/app/services/coments/coments.service';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';

@Component({
  selector: 'app-boardpage',
  templateUrl: './boardpage.component.html',
  styleUrls: ['./boardpage.component.css'],
})
export class BoardpageComponent {
  constructor(
    public getProjectsService: GetProjectsService,
    public router: Router,
    public comentsService: ComentsService,
  ) {}
  projects: any = [];
  projectsRecentlyViewed: any = [];
  render: string = 'home';
  coments: any = []

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    const projectsRecently = JSON.parse(
      localStorage.getItem('projectsRecently')!
    );
    projectsRecently === null &&
      localStorage.setItem('projectsRecently', JSON.stringify([]));
    this.getProjectsService.getProjects(userId!);
    projectsRecently !== null &&
      this.getProjectsService
        .getProjectsRecentlyViewed(projectsRecently)
        .subscribe((response: any[]) => {
          this.projectsRecentlyViewed = response;
          console.log(this.projectsRecentlyViewed);
        });
    this.comentsService.getComentsHome(userId!).subscribe((response: any) => {
      this.coments = response
    })
  }

  goProject(projectId: string) {
    let projects = JSON.parse(localStorage.getItem('projectsRecently')!);

    if (!projects.includes(projectId)) {
      if (projects.length === 3) {
        projects.shift();
        projects.push(projectId);
      } else {
        projects.push(projectId);
      }
    }

    localStorage.setItem('projectsRecently', JSON.stringify(projects));
    this.router.navigate(['project', projectId]);
  }

  changeRender(div: string): any {
    this.render = div;
  }

  redirectComentToProject(projectId: string): any {
    this.router.navigate([`project/${projectId}`])
  }
}
