import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {

  constructor(public http: HttpClient) { }

  getAllTasks(projectId: string){
    return this.http.get(`http://localhost:3001/task/${projectId}`)
  }

  createTask(task: object){
    this.http.post('http://localhost:3001/task/', task).subscribe((response) => {
      console.log('tarea creada', response)
    }, 
    (error) => {
      console.log('error ', error)
    })
  }

  updateTask(id: string, body: object) {
    this.http.put(`http://localhost:3001/task/${id}`, body).subscribe((response) => {
      console.log('actualizado correctamente', response)
    },
    (error) => {
      console.log('error al actualizar', error)
    })
  }
}
