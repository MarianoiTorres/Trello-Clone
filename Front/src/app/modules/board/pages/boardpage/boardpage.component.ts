import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ComentsService } from 'src/app/services/coments/coments.service';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';
import { loadProjects } from 'src/app/state/actions/project.action';
import { loadProjectId } from 'src/app/state/actions/user.action';
import { getPersonalProjects } from 'src/app/state/selectors/projects.selectors';
import { selectUser } from 'src/app/state/selectors/user.selectors';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';

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
    private store: Store<any>,
    private userService: AuthService,
    public dialog: MatDialog
  ) {}

  projectsRecentlyViewed: any = [];
  render: string = 'home';
  coments: any = [];

  user$ = this.store.select(selectUser)
  personalProjects: any = []

  ngOnInit() {
    this.user$.subscribe((user) => {
      const usedId = user._id
      console.log('////////////////' + user);
      this.store.dispatch(loadProjects({ userId: usedId }))
      this.store.select(getPersonalProjects, {userId: usedId}).subscribe((response) => {
        this.personalProjects = response
        console.log('+++++++++' + response);
        
      })
      this.comentsService.getComentsHome(user._id).subscribe((response: any) => {
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
        
        this.getProjectsService
          .getProjectsRecentlyViewed(user.projectsRecentlyView)
          .subscribe((projects: any) => {
            this.projectsRecentlyViewed = projects;
          });
      });
    })
    
    this.getProjectsService.projects$.subscribe((response: any) => {
      console.log(response);
    });

  }

  goProject(projectId: string) {
    this.user$.pipe(
      take(1) // Toma el primer valor y luego se desuscribe
    ).subscribe((user) => {
      const userId = user._id;

      this.userService.addProjectId(projectId, userId).subscribe((response) => {
        this.store.dispatch(loadProjectId({projectId}))
        this.router.navigate(['project', projectId]);
      })
    })

  }

  changeRender(div: string): any {
    this.render = div;
  }

  redirectComentToProject(projectId: string): any {
    this.router.navigate([`project/${projectId}`]);
  }

  deleteProject(projectId: string): any {
    this.dialog.open(ConfirmdialogComponent, {
      width: '35%',
      data: {
        projectId: projectId
      }
    })
  }
}
