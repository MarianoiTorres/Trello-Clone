import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import {
  clearProjectState,
  createNewProject,
} from 'src/app/state/actions/project.action';
import { clearUserState } from 'src/app/state/actions/user.action';
import { searchProjects } from 'src/app/state/selectors/projects.selectors';
import { selectUser } from 'src/app/state/selectors/user.selectors';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', './styles/style1.component.css'],
})
export class NavComponent {
  constructor(
    public route: Router,
    private store: Store<any>,
    private el: ElementRef
  ) {}

  show: boolean = false;
  name: string = '';
  showProjectsDiv: boolean = false;
  showUserMenu: boolean = false;
  user: any = {};

  user$ = this.store.select(selectUser);

  ngOnInit(): any {
    this.user$.subscribe((user) => {
      this.user = {
        userInitials: user.name[0] + user.surname[0],
        userName: user.name + ' ' + user.surname,
        email: user.email,
        background: user.background,
      };
    });
  }

  createNewProject(): any {
    this.user$.pipe(
      take(1)
    ).subscribe((user) => {
      const userId = user._id;

      let project = {
        name: this.name,
        userCreator: userId!,
        member: [userId!],
      };

      this.store.dispatch(createNewProject({ project }))
    });
  }

  goBoardPage(): any {
    this.route.navigate(['board']);
  }

  projectsFiltered: any = [];
  projectName: any = '';
  searchProject(event: any): any {
    this.store
      .select(searchProjects, { name: this.projectName })
      .subscribe((projects: any) => {
        this.projectsFiltered = projects;
      });
  }

  showDiv() {
    this.showProjectsDiv = true;
  }

  hideDiv() {
    this.showProjectsDiv = false;
  }

  goProject(projectId: string) {
    this.route.navigate(['project', projectId]);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.el.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.showUserMenu = false;
      this.show = false;
    }
  }

  logOut(): any {
    this.store.dispatch(clearUserState());
    this.store.dispatch(clearProjectState());
    this.route.navigate(['']);
  }
}
