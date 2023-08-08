import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentsService {

  constructor(public http: HttpClient) { }

  getComentsHome(userId: string): any {
    return this.http.get(`http://localhost:3001/coments/${userId}`)
  }
}
