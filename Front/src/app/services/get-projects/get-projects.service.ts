import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectToCreate } from 'src/app/interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class GetProjectsService {

  constructor(public http: HttpClient) { }

  projects: any = []
  project: any = {}

  createProject(project: ProjectToCreate): any{
    this.http.post('http://localhost:3001/project', project).subscribe((response) => {
      this.projects.push(response)
      console.log(this.projects)
    },
    (error) => {
      console.log(error);
      
    })
  }

  getProjects(userId: string){
    this.http.get(`http://localhost:3001/project/projects/${userId}`).subscribe((response) => {
      this.projects = response
    },
    (error) => {
      console.log(error);
    })
  }

  getProjectById(projectId: string): any {
    this.http.get(`http://localhost:3001/project/${projectId}`).subscribe((response) => {
      this.project = response
      console.log(this.project);
      
    })
  }


}
