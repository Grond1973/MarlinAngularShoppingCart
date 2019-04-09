import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartUrlUtility } from 'src/app/shared/cartUrlUtility';
import { NgForm } from '@angular/forms';
import { State } from 'src/app/shared/state-model';
import { CustomerStateServiceService } from 'src/app/shared/customer-state-service.service';
import { CreditCardServiceService } from 'src/app/shared/credit-card-service.service';
import { CreditCard } from 'src/app/shared/creditCard-model';
import { ShoppingCart } from 'src/app/shared/shoppingCart-model';
import { Address } from 'src/app/shared/address-model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  private cartUrlUtil = new CartUrlUtility();
  private states: State[] = [];
  private creditCards: CreditCard[] = [];
  private shopCart: ShoppingCart;
  useBillAddressForShipping: boolean = false;
  billAddress: Address;
  selectedCCard: CreditCard;

  constructor(private route: ActivatedRoute, private router: Router, 
              private stateSVC: CustomerStateServiceService,
              private creditCardSVC: CreditCardServiceService) { }

  ngOnInit() {
    this.getStates();
    this.getCreditCards();

    this.shopCart = new ShoppingCart();

    this.route.paramMap.subscribe(params => {
      this.shopCart.items = this.cartUrlUtil.getJSONFromUrl(params.get('cart'));
      console.log("total cart items: " + this.shopCart.items.length);
    });

    this.billAddress = new Address();
  }

  getStates() : void {
    this.stateSVC.getStates().subscribe(states => this.states = states);
  }

  getCreditCards(): void {
    this.creditCardSVC.getCreditCards().subscribe(ccards => this.creditCards = ccards);
  }

  onSubmit(): void {
  
    this.shopCart.cartCustomer.BillingAddress = this.billAddress;
    this.shopCart.cartCustomer.creditCard = this.selectedCCard;

    if(this.useBillAddressForShipping) {
      this.shopCart.cartCustomer.ShippingAddress = this.billAddress;
      this.routeToSummary();
    } else {
      this.routeToBillDetails();
    }
  }

  changeStatus(): void {
    console.log("checkbox: " + this.useBillAddressForShipping);
  }

  keepShopping(): void {
    this.router.navigate(['/products', this.cartUrlUtil.base64EncodeObject(this.shopCart.items)]);
  }

  routeToBillDetails(): void {
    this.router.navigate(['/shippingdetails', this.cartUrlUtil.base64EncodeObject(this.shopCart)]);
  }

  routeToSummary(): void {
    this.router.navigate(['/summary', this.cartUrlUtil.base64EncodeObject(this.shopCart)]);
  }

}
