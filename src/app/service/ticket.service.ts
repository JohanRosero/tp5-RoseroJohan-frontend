import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }


  getTickets(): Observable<any> {

    const url = "http://localhost:3000/api/ticket";
    const headers = {
      'Content-Type': 'application/json'
    }
    return this.http.get(url, { headers: headers })
  }

  getTicketByCategory(category: string): Observable<any> {
    const url = "http://localhost:3000/api/ticket/category/";
    const headers = {
      'Content-Type': 'application/json'
    }
    return this.http.get(url + category, { headers: headers })
  }
  getEspectators(): Observable<any> {
    const url = "http://localhost:3000/api/spectator";
    const headers = {
      'Content-Type': 'application/json'
    }
    return this.http.get(url, { headers: headers })
  }

  createTicket(ticket: any):Observable<any>{
    const url = "http://localhost:3000/api/ticket/";
    const headers = {
      'Content-Type': 'application/json'
    }
    return this.http.post(url,ticket,{headers:headers})
  }
}
