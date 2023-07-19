import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {

  constructor(public http: HttpClient) { }

  allTasks: any

  getAllTasks(projectId: string){
    this.http.get(`http://localhost:3001/task/${projectId}`).subscribe((value) => {
      this.allTasks = value
    })
  }
}
