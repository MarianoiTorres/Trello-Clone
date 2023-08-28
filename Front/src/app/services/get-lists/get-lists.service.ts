import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from 'src/app/interfaces/list';

@Injectable({
  providedIn: 'root',
})
export class GetListsService {
  constructor(public http: HttpClient) {}

  getLists(listId: string){
    return this.http.get<List[]>(`https://nice-red-monkey-sock.cyclic.app/list/${listId}`)
  }

  createList(body: any){
    return this.http.post<List>(`https://nice-red-monkey-sock.cyclic.app/list/`, body)
  }

  deleteList(listId: string): any {
    return this.http.delete(`https://nice-red-monkey-sock.cyclic.app/list/${listId}`)
  }
}
