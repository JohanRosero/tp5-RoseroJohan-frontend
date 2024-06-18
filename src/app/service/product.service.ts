import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Productos> {
    let url = 'http://localhost:3000/api/product/prominets';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<Productos>(url, { headers: headers });
  }

  createProduct(product: any): Observable<any> {
    let url = 'http://localhost:3000/api/product';
    return this.http.post(url, product);
  }
  
  
  
}

