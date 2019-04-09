import { Component, OnInit } from '@angular/core';
import { CartmessageService } from '../../shared/cartmessage.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-cart-dash-board',
  templateUrl: './cart-dash-board.component.html',
  styleUrls: ['./cart-dash-board.component.css']
})
export class CartDashBoardComponent implements OnInit {

  items:number;
  
  messages: any[] = new Array();
  subscription: Subscription;

  constructor(private cartMsgSvc : CartmessageService, private router: Router) {
    /**
     * subscribe to msg svc
     */
    this.subscription = this.cartMsgSvc.getMessage().subscribe(msg => {
        if(msg) {
          this.checkIfInArray(msg);

          //this.items = this.getTotalItmsInCart();
        } else {
          this.messages = new Array();
        }
      });
   }

  ngOnInit() {
    this.items= 0;
  }

  ngOnDestroy() {
    /**
     * unsubscribe
     */
    this.subscription.unsubscribe();
  }

  viewCart() : void {
    console.log("In viewCart()...");
    console.log("JSON CART LIST: " + btoa(JSON.stringify(this.messages)));
    this.cartMsgSvc.sendCartList(this.messages);
    this.router.navigate(['/viewcart', btoa(JSON.stringify(this.messages))]);
  }

  checkIfInArray(itm: any) : void {
    var len = this.messages.length;
    var itmExists = false;

    for(var x = 0; x < len; x++) {
      if(this.messages[x].Id === itm.Id) {
        this.messages[x].Count++;
        itmExists = true;
        break;
      }
    }

    if(!itmExists) { this.messages.push(itm); }

  }

  

}
