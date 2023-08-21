import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';
import { selectUser } from 'src/app/state/selectors/user.selectors';
import { DialogRef } from '@angular/cdk/dialog';

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

  projectId: string = '';
  user$ = this.store.select(selectUser);

  confirmDeleteProject(): any {
    this.user$.subscribe((user) => {
      this.projectService.dateleProject(this.projectId, user._id);
    });
  }
}
