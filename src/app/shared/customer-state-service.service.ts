import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from './state-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerStateServiceService {

  readonly rootURL ="http://localhost:50760/api";
  private states: State[] = [];

  constructor(private http: HttpClient) { }

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(this.rootURL + "/State");
  }
  
}
