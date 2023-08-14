import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewTaskToCreate } from 'src/app/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {

  constructor(public http: HttpClient) { }

  getAllTasks(projectId: string){
    return this.http.get<any[]>(`http://localhost:3001/task/${projectId}`)
  }

  createTask(task: object){
    return this.http.post<any>('http://localhost:3001/task/', task)
  }

  updateTask(id: string, body: object) {
    return this.http.put(`http://localhost:3001/task/${id}`, body)
  }

  getTaskById(taskId: string): any {
    return this.http.get(`http://localhost:3001/task/detail/${taskId}`)
  }

  deleteTask(taskId: string): any { 
    return this.http.delete(`http://localhost:3001/task/${taskId}`)
  }
}
