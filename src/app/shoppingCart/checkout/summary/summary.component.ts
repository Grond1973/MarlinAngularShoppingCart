import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/shared/shoppingCart-model';
import { ActivatedRoute, Router } from '@angular/router';
import { CartUrlUtility } from 'src/app/shared/cartUrlUtility';
import { CustomerStateServiceService } from 'src/app/shared/customer-state-service.service';
import { State } from 'src/app/shared/state-model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  private shopCart: ShoppingCart;
  private cartUrlUtil = new CartUrlUtility();
  constructor(private route: ActivatedRoute, private stateSVC: CustomerStateServiceService) { }
  private states: State[];
  private shipToState: string;
  ngOnInit() {
    this.getStates();
    this.shopCart = new ShoppingCart();
    this.states = new Array();
    this.route.paramMap.subscribe(params => {
      var tempObj = this.cartUrlUtil.getJSONFromUrl(params.get('cart'));
      this.shopCart.cartCustomer = tempObj.cartCustomer;
      this.shopCart.items = tempObj.items;

    });
  }

  getStates() : void {
    this.stateSVC.getStates().subscribe(states => this.states = states);
  }

  getStateName(id: number): string {
    console.log("STATE ID: " + id);
    var theName ="";
    var len = this.states.length;
    console.log("length: " + len);
    for(var x = 0; x < len; x++){
      if(id == this.states[x].Id){
        theName = this.states[x].Name;
        console.log("MATCH!!!" + this.states[x].Name)
        break;
      }
      return theName;
    }
  }
}
