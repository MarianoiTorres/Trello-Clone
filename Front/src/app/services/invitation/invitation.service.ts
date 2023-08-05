import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(public http: HttpClient) { }

  decodeToken(body: any): any {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${body.token}`
    })
    return this.http.post<any>('http://localhost:3001/invitation/decode', body, {headers})
  }

  generateLink(body: any): any {
    return this.http.post<string>('http://localhost:3001/invitation', body)
  }

  sendInvitation(body: any): any {
    this.http.post<any>('http://localhost:3001/invitation/mail', body).subscribe((response) => {
      console.log(response);  
    },
    (error) => {
      console.log(error)
    })
  }
}
