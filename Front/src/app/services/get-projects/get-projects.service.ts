import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetProjectsService {

  constructor(public http: HttpClient) { }

  projects: any

  getProjects(){
    this.http.get('http://localhost:3001/project/projects/64ac71584bac2a29fa4adbff').subscribe(
      value => {
        this.projects = value
      },
      error => {
        console.log('error al hacer la peticion');

      }

    )
  }

  getProjectById() {
    
  }
}
