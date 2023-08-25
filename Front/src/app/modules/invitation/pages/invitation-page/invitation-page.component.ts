import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';
import { InvitationService } from 'src/app/services/invitation/invitation.service';
import { selectUser } from 'src/app/state/selectors/user.selectors';

@Component({
  selector: 'app-invitation-page',
  templateUrl: './invitation-page.component.html',
  styleUrls: ['./invitation-page.component.css'],
})
export class InvitationPageComponent {
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public invitationService: InvitationService,
    public projectService: GetProjectsService,
    private store: Store<any>
  ) {}

  projectId: string = '';
  token: string = '';
  user$ = this.store.select(selectUser)

  ngOnInit() {
    this.route.params.subscribe((value) => {
      this.token = value['id'];
      this.invitationService
        .decodeToken({ token: this.token })
        .subscribe((response: any) => {
          this.projectId = response.projectId;
          this.projectService.getProjectById(this.projectId)
        },
        (error: Error) => {
          this.token = 'invitacion expirada'
        });
    });
  }

  addMember(): any {

    this.user$.subscribe((user) => 
    this.projectService
      .addMember(this.projectId, this.token, { userId: user._id })
      .subscribe((response: any) => {
        console.log(response);
        this.router.navigate([''])
      })
    )
  }
}
