import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  readonly rootURL ="http://localhost:50760/api";

  constructor(private http : HttpClient) { }

  getProducts(): Observable<Product[]> {
    console.log(this.rootURL + "/Product");
    return this.http.get<Product[]>(this.rootURL + "/Product");
  }
}
