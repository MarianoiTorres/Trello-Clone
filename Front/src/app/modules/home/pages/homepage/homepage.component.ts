import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { VideodialogComponent } from '../video/videodialog/videodialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(public dialog: MatDialog, public router: Router){}

  email: string = ''
  mostrar: boolean = false
  openDialogVideo(): any {
    this.mostrar = !this.mostrar
    this.dialog.open(VideodialogComponent, {
      data: {mostrar: this.mostrar},
      width: '50%',
    });
  }

  redirectRegister(): any { 
    this.router.navigate(['/auth/register'], {
      state: {email: this.email}
    })
  }
}
