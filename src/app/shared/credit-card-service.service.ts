import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from './creditCard-model';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreditCardServiceService {

  creditCards: CreditCard[];
  readonly rootURL ="http://localhost:50760/api";

  constructor(private http: HttpClient) { }

  getCreditCards(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(this.rootURL + "/CreditCard");
  }
}
