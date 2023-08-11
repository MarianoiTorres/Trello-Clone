import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from 'src/app/interfaces/list';

@Injectable({
  providedIn: 'root',
})
export class GetListsService {
  constructor(public http: HttpClient) {}

  getLists(listId: string){
    return this.http.get<List[]>(`http://localhost:3001/list/${listId}`)
  }

  createList(body: any){
    return this.http.post<List>(`http://localhost:3001/list/`, body)
  }

  deleteList(listId: string): any {
    return this.http.delete(`http://localhost:3001/list/${listId}`)
  }
}
