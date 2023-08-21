import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardpageComponent } from './pages/boardpage/boardpage.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BoardpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
