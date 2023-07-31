import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(public http: HttpClient) { }

  decodeToken(body: any): any {
    return this.http.post<any>('http://localhost:3001/invitation/decode', body)
  }
}
