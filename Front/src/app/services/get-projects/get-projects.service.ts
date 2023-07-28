import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectToCreate } from 'src/app/interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class GetProjectsService {

  constructor(public http: HttpClient) { }

  createProject(project: ProjectToCreate): any{
    return this.http.post('http://localhost:3001/project', project)
  }

  getProjects(userId: string){
    return this.http.get(`http://localhost:3001/project/projects/${userId}`)
  }


}
