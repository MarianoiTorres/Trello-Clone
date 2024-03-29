import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProjectToCreate } from 'src/app/interfaces/project';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectProjects } from 'src/app/state/selectors/projects.selectors';
import { selectUser } from 'src/app/state/selectors/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class GetProjectsService {
  projects$ = this.store.select(selectProjects);
  
  constructor(public http: HttpClient, private store: Store<AppState>) {}
  project: any = {};
  containerBackgroundImage: string = '';

  createProject(project: ProjectToCreate) {
    return this.http.post<any>('https://nice-red-monkey-sock.cyclic.app/project', project);
  }

  getPersonalProjects(userId: string) {
    return this.http.get(`https://nice-red-monkey-sock.cyclic.app/project/personalProjects/${userId}`)
  }

  getProjects(userId: string) {
    return this.http.get(`https://nice-red-monkey-sock.cyclic.app/project/projects/${userId}`);
  }

  getProjectById(projectId: string): any {
    this.http
      .get(`https://nice-red-monkey-sock.cyclic.app/project/${projectId}`)
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
        console.log(this.project);
        
      });
  }

  addMember(projectId: string, token: string, body: any): any {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.put(`https://nice-red-monkey-sock.cyclic.app/project/${projectId}`, body, {
      headers,
    });
  }

  getProjectsRecentlyViewed(projectsId: string[]) {
    const ids = projectsId.map((id) => `id=${id}`).join('&');
    return this.http.get(`https://nice-red-monkey-sock.cyclic.app/project/recently?${ids}`);
  }

  updateBackground(id: string, background: string): any {
    this.http
      .put(`https://nice-red-monkey-sock.cyclic.app/project/background/${id}`, {
        background: background,
      })
      .subscribe((response: any) => {
        this.containerBackgroundImage = response.background;
      });
  }

  dateleProject(projectId: string, userId: string): any {
    console.log(`https://nice-red-monkey-sock.cyclic.app/project/${projectId}?userId=${userId}`);
    
    this.http.delete(`https://nice-red-monkey-sock.cyclic.app/project/${projectId}?userId=${userId}`).subscribe((response) => {
      console.log(response);
      
    }, (error) => console.log(error)
    )
  }

  deleteMember(projectId: string,userId: string): any {
    this.http.put(`https://nice-red-monkey-sock.cyclic.app/project/deleteUser/${projectId}`, {userId}).subscribe((response: any) => {

        this.project.member = this.project.member.filter((member: any) => member._id !== userId)
        console.log(this.project);
      
    })
  }
}
