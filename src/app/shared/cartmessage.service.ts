import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartItem } from './cartItem-model';

@Injectable({
  providedIn: 'root'
})
export class CartmessageService {

  private subject = new Subject<any>();
  private cartList = new Subject<any>();

  constructor() { }

  clearMessage() {
    this.subject.next();
  }

  clearCartList() {
    this.cartList.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getCartList(): Observable<any> {
    return this.cartList.asObservable();
  }

  sendMessage(message: string) {
    this.subject.next({ text: message});
  }

  sendAddProductMessage(cartItm : CartItem) : void {
    this.subject.next(cartItm);
  }

  sendCartList(cartList : CartItem[]) : void {
    this.cartList.next(cartList);
  }
}
