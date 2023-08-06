import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-videodialog',
  templateUrl: './videodialog.component.html',
  styleUrls: ['./videodialog.component.css']
})
export class VideodialogComponent {
  mostrar = false;
  video: string = '../../../../../assets/videos/Trello.mp4'

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.mostrar = data.mostrar; // Recibe el estado "mostrar" del componente que abre el dialog
  }
}
