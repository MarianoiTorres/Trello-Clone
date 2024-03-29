import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';
import { InvitationService } from 'src/app/services/invitation/invitation.service';
import { selectUser } from 'src/app/state/selectors/user.selectors';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invitation-page',
  templateUrl: './invitation-page.component.html',
  styleUrls: ['./invitation-page.component.css'],
})
export class InvitationPageComponent {

  private userSubscription: Subscription = new Subscription();


  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public invitationService: InvitationService,
    public projectService: GetProjectsService,
    private store: Store<any>,
    private dialog: MatDialog
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
          console.log(response);
          
          this.projectService.getProjectById(this.projectId) 

          this.userSubscription = this.user$.subscribe((user) => {
            if(!user.name && !response.userInvited)
            {
              this.dialog.open(LoginDialogComponent, {
                width:'50%'
              })
            }
          })
        },
        (error: Error) => {
          this.token = 'invitacion expirada'
        });
    });
  }

  addMember(): any {

    this.user$.subscribe((user) => {
    console.log(user._id)
    
    this.projectService
      .addMember(this.projectId, this.token, { userId: user._id })
      .subscribe((response: any) => {
        console.log(response);
        this.router.navigate([`project/${this.projectId}`])
      })}
    )
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
