import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProjectToCreate } from 'src/app/interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class GetProjectsService {
  constructor(public http: HttpClient) {}

  projects: any = [];
  project: any = {};
  containerBackgroundImage: string = '';

  createProject(project: ProjectToCreate): any {
    this.http.post('http://localhost:3001/project', project).subscribe(
      (response) => {
        this.projects.push(response);
        console.log(this.projects);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProjects(userId: string) {
    this.http.get(`http://localhost:3001/project/projects/${userId}`).subscribe(
      (response) => {
        this.projects = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProjectById(projectId: string): any {
    this.http
      .get(`http://localhost:3001/project/${projectId}`)
      .subscribe((response: any) => {
        this.project = {
          projectName: response.name,
          userCreator:
            response.userCreator.name + ' ' + response.userCreator.surname,
          projectId: response._id,
          userCreatorId: response.userCreator._id,
          member: response.member,
        };
        this.containerBackgroundImage = response.background
      });
  }

  addMember(projectId: string, token: string, body: any): any {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.put(`http://localhost:3001/project/${projectId}`, body, {
      headers,
    });
  }

  getProjectsRecentlyViewed(projectsId: string[]): any {
    const ids = projectsId.map((id) => `id=${id}`).join('&');
    return this.http.get(`http://localhost:3001/project/recently?${ids}`);
  }

  updateBackground(id: string, background: string): any {
    this.http.put(`http://localhost:3001/project/background/${id}`, {background: background}).subscribe((response: any) => {
      this.containerBackgroundImage = response.background
    })
  }
}
