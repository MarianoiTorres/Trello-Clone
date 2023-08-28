import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';
import { selectUser } from 'src/app/state/selectors/user.selectors';
import { DialogRef } from '@angular/cdk/dialog';
import { deleteProject } from 'src/app/state/actions/project.action';
import { removeProjectRecentlyView } from 'src/app/state/actions/user.action';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css'],
})
export class ConfirmdialogComponent {
  constructor(
    private store: Store<any>,
    public dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: GetProjectsService
  ) {
    this.projectId = data.projectId;
  }

  private userSubscription: Subscription | null = null;

  projectId: string = '';
  user$ = this.store.select(selectUser);

  confirmDeleteProject(): any {

      this.user$.pipe(
        take(1)
      ).subscribe((user) => {
        const userId = user._id
      this.projectService.dateleProject(this.projectId, userId)
      this.store.dispatch(deleteProject({projectId: this.projectId}))
      this.store.dispatch(removeProjectRecentlyView({projectId: this.projectId}))
      this.dialogRef.close()
    });
  
  }


}
