import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import { VideodialogComponent } from './pages/video/videodialog/videodialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HomepageComponent, VideodialogComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, FormsModule, MatButtonModule, MatDialogModule],
})
export class HomeModule {}
