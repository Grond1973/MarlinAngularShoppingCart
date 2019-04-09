import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartUrlUtility } from 'src/app/shared/cartUrlUtility';
import { NgForm } from '@angular/forms';
import { State } from 'src/app/shared/state-model';
import { CustomerStateServiceService } from 'src/app/shared/customer-state-service.service';
import { CreditCardServiceService } from 'src/app/shared/credit-card-service.service';
import { ShoppingCart } from 'src/app/shared/shoppingCart-model';
import { Address } from 'src/app/shared/address-model';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {

  private cartUrlUtil = new CartUrlUtility();
  private states: State[] = [];
  private shopCart: ShoppingCart;
  useBillAddressForShipping: boolean = false;
  shipAddress: Address;


  constructor(private route: ActivatedRoute, private router: Router, 
    private stateSVC: CustomerStateServiceService,
    private creditCardSVC: CreditCardServiceService) { }

  ngOnInit() {
    this.getStates();

    this.shopCart = new ShoppingCart();

    this.route.paramMap.subscribe(params => {
      var tempObj = this.cartUrlUtil.getJSONFromUrl(params.get('cart'));
      this.shopCart.cartCustomer = tempObj.cartCustomer;
      this.shopCart.items = tempObj.items;
      
      console.log("CART TOTAL: $" + this.shopCart.getCartTotal());
      console.log("CCARD: " + this.shopCart.cartCustomer.creditCard.Name);
    });

    this.shipAddress = new Address();
  }

  getStates() : void {
    this.stateSVC.getStates().subscribe(states => this.states = states);
  }

  onSubmit() {
    this.shopCart.cartCustomer.ShippingAddress = this.shipAddress;
    console.log("CART: " + JSON.stringify(this.shopCart));
    this.routeToSummary();
  }

  keepShopping(): void {
    this.router.navigate(['/products', this.cartUrlUtil.base64EncodeObject(this.shopCart.items)]);
  }

  routeToSummary(): void {
    this.router.navigate(['/summary', this.cartUrlUtil.base64EncodeObject(this.shopCart)]);
  }
}
