import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';
import { InvitationService } from 'src/app/services/invitation/invitation.service';

@Component({
  selector: 'app-invitation-page',
  templateUrl: './invitation-page.component.html',
  styleUrls: ['./invitation-page.component.css'],
})
export class InvitationPageComponent {
  constructor(
    public route: ActivatedRoute,
    public invitationService: InvitationService,
    public projectService: GetProjectsService
  ) {}

  projectId: string = '';
  token: string = '';

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
    const userId = localStorage.getItem('userId');
    this.projectService
      .addMember(this.projectId, this.token, { userId })
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
