import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewTaskToCreate } from 'src/app/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {

  constructor(public http: HttpClient) { }

  getAllTasks(projectId: string){
    return this.http.get<any[]>(`https://nice-red-monkey-sock.cyclic.app/task/${projectId}`)
  }

  createTask(task: object){
    return this.http.post<any>('https://nice-red-monkey-sock.cyclic.app/task/', task)
  }

  updateTask(id: string, body: object) {
    return this.http.put(`https://nice-red-monkey-sock.cyclic.app/task/${id}`, body)
  }

  getTaskById(taskId: string): any {
    return this.http.get(`https://nice-red-monkey-sock.cyclic.app/task/detail/${taskId}`)
  }

  deleteTask(taskId: string): any { 
    return this.http.delete(`https://nice-red-monkey-sock.cyclic.app/task/${taskId}`)
  }

  removeMemberOfTask(userId: string, taskId: string): any {
    return this.http.put(`https://nice-red-monkey-sock.cyclic.app/task/removeMember/${taskId}?userId=${userId}`, {})
  }
}
