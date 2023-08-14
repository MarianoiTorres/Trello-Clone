import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProjectToCreate } from 'src/app/interfaces/project';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectProjects } from 'src/app/state/selectors/projects.selectors';

@Injectable({
  providedIn: 'root',
})
export class GetProjectsService {
  projects$ = this.store.select(selectProjects);

  constructor(public http: HttpClient, private store: Store<AppState>) {}
  project: any = {};
  containerBackgroundImage: string = '';

  createProject(project: ProjectToCreate) {
    return this.http.post<any>('http://localhost:3001/project', project);
  }

  getProjects(userId: string) {
    return this.http.get(`http://localhost:3001/project/projects/${userId}`);
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
        this.containerBackgroundImage = response.background;
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

  getProjectsRecentlyViewed(projectsId: string[]) {
    const ids = projectsId.map((id) => `id=${id}`).join('&');
    return this.http.get(`http://localhost:3001/project/recently?${ids}`);
  }

  updateBackground(id: string, background: string): any {
    this.http
      .put(`http://localhost:3001/project/background/${id}`, {
        background: background,
      })
      .subscribe((response: any) => {
        this.containerBackgroundImage = response.background;
      });
  }
}
