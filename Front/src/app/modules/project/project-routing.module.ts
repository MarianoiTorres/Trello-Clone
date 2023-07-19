import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectpageComponent } from './pages/projectpage/projectpage.component';

const routes: Routes = [{
  path: 'project/:id',
  component: ProjectpageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
