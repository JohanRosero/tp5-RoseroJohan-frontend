import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convertion } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<any> {
    const url = 'https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies';
    const options = {
      headers: {
        'x-rapidapi-key': 'cfffd02b72mshb860f1162391697p169bb8jsnf22dcd9f604b',
        'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
      }
    }
    return this.http.get(url, options);
  }

  convertion(data: any): Observable<Convertion> {
    const url = 'https://currency-converter18.p.rapidapi.com/api/v1/convert?';
    const options = {
      headers: {
        'x-rapidapi-key': 'cfffd02b72mshb860f1162391697p169bb8jsnf22dcd9f604b',
        'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
      },
      params: data,
    }
    return this.http.get<Convertion>(url, options)
  }

  saveTransaction(data: any): Observable<any> {
    let url = 'http://localhost:3000/api/transaction/';   
    const headers = {
      'Content-Type': 'application/json'
    };
    return this.http.post(url, data, {headers: headers});
  }

  getTransactions():Observable<any> {
    let url = 'http://localhost:3000/api/transaction/';
    const headers = {
      'Content-Type': 'application/json'
    };
    return this.http.get(url, {headers:headers});
  }

  getCurrencyByOriginDestiny(origin: string,destiny: string):Observable<any>{
    let url = 'http://localhost:3000/api/transaction/filter';
    const headers = {
      'Content-Type': 'application/json'
    };
    const params={
      origin: origin,
      destiny: destiny,
    }
    return this.http.get(url, {headers:headers,params:params});
  }
}