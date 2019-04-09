import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../shared/cartItem-model';
import { ActivatedRoute, Router } from '@angular/router';
import { CartUrlUtility } from '../../shared/cartUrlUtility';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  cartItems : CartItem[] = new Array();
  readonly REMOVE_ALL_ITMS : string = "This will delete all cart items of type: ";
  readonly REMOVE_ITEM: string = "Remove from cart?";
  readonly REMOVE_SUFFIX: string = " from your cart. Continue?";
  private cartUrlUtil = new CartUrlUtility;

  constructor(private route: ActivatedRoute, private router: Router) {

    console.log("In constructor...");
   }

  ngOnInit() {
    //this.cartItems = [];
    console.log("In ngOnInit()...");

    this.route.paramMap.subscribe(params => {
      this.cartItems = this.cartUrlUtil.getJSONFromUrl(params.get('cart'));
    });
  }

  getCartTotal(): number {
    var total = 0;
    this.cartItems.forEach(function(curItm){
      total += (curItm.Price * curItm.Count);
    });

    return total;
  }

  incQty(itm: CartItem): void {
    itm.Count++;
  }

  decQty(itm: CartItem): void {
    if(itm.Count > 0) {
      itm.Count--;
    }
  }

  deleteCartItem(itm: CartItem): void {
    if(itm.Count > 1) {
      if(confirm(this.REMOVE_ALL_ITMS + itm.Name + this.REMOVE_SUFFIX)) {
        var idx = this.findCartItmIndex(itm);
        if(idx != -1){
            var removed = this.cartItems.splice(idx, 1);
        } else {
          console.log("Unable to delete item: " + itm.Name + " ID:" + itm.Id);
        }
      }
    } else {
      if(confirm(this.REMOVE_ITEM)) {
        var idx = this.findCartItmIndex(itm);
        if(idx != -1){
            var removed = this.cartItems.splice(idx, 1);
        } else {
          console.log("Unable to delete item: " + itm.Name + " ID:" + itm.Id);
        }
      }
    }
  }

  findCartItmIndex(itm: CartItem): number {
    var idx = -1;
    var len = this.cartItems.length;
    for(var x = 0; x < len; x++) {
      if(this.cartItems[x].Id === itm.Id) {
        idx = x;
        break;
      }
    }

    return idx;
  }

  viewProducts(): void {
    console.log("In viewProducts...");
    this.router.navigate(['/products', this.cartUrlUtil.base64EncodeObject(this.cartItems)]);
  }

  checkout(): void {
    this.router.navigate(['/paymentdetails', this.cartUrlUtil.base64EncodeObject(this.cartItems)]);
  }

}
