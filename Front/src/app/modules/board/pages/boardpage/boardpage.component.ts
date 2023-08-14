import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ComentsService } from 'src/app/services/coments/coments.service';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';
import { loadProjects } from 'src/app/state/actions/project.action';

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
    private store: Store<any>
  ) {}

  projectsRecentlyViewed: any = [];
  render: string = 'home';
  coments: any = [];

  ngOnInit() {
    const userId = JSON.parse(localStorage.getItem('userId')!);
    this.store.dispatch(loadProjects({ userId }));
    const projectsRecently = JSON.parse(
      localStorage.getItem('projectsRecently')!
    );
    projectsRecently === null &&
      localStorage.setItem('projectsRecently', JSON.stringify([]));
    this.getProjectsService.projects$.subscribe((response: any) => {
      console.log(response);
    });
    projectsRecently !== null &&
      this.getProjectsService
        .getProjectsRecentlyViewed(projectsRecently)
        .subscribe((projects: any) => {
          this.projectsRecentlyViewed = projects;
        });
    this.comentsService.getComentsHome(userId!).subscribe((response: any) => {
      response.map((element: any) => {
        if (element.deadline) {
          const date = new Date(element.deadline);
          const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          };
          const formatter = new Intl.DateTimeFormat('en-US', options);
          const formattedDate = formatter.format(date);
          element.deadline = formattedDate;
        }
      });
      this.coments = response;
    });
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
    this.router.navigate([`project/${projectId}`]);
  }
}
