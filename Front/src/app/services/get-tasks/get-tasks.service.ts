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
    this.http.put(`http://localhost:3001/task/${id}`, body).subscribe((response) => {
      console.log('actualizado correctamente', response)
    },
    (error) => {
      console.log('error al actualizar', error)
    })
  }

  getTaskById(taskId: string): any {
    return this.http.get(`http://localhost:3001/task/detail/${taskId}`)
  }
}
