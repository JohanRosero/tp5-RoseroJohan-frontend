import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }


  getTickets(): Observable<Ticket[]> {
    const url = "http://localhost:3000/api/ticket";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    return this.http.get<Ticket[]>(url, { headers: headers });
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

  createTicket(ticket: any): Observable<any> {
    const url = "http://localhost:3000/api/ticket/";
    const headers = {
      'Content-Type': 'application/json'
    }
    return this.http.post(url, ticket, { headers: headers })
  }

  deleteTicket(id: string): Observable<any> {
    const url = "http://localhost:3000/api/ticket/";
    const headers = {
      'Content-Type': 'application/json'
    }
    return this.http.delete(url + id, { headers: headers })
  }

  getCategorias():Observable<any>{
    const url = "http://localhost:3000/api/categoria/";
    const headers = {
      'Content-Type': 'application/json'
    }
    return this.http.get(url, { headers: headers })

  }
}
