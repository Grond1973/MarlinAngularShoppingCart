import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/product-model';
import { CartItem } from '../shared/cartItem-model';
import { Router, ActivatedRoute } from '@angular/router';
import { CartUrlUtility } from '../shared/cartUrlUtility';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productSvc: ProductService, private router: Router, private route: ActivatedRoute) { }
  products: Product[] = new Array();
  cartItems: CartItem[] = new Array();
  cartMsg: string;
  private cartUrlUtil = new CartUrlUtility();

  ngOnInit() {
    console.log("In ngOnInit()...products...");
    this.getProducts();

    this.route.params.subscribe(routeParams => {
      if(routeParams.cart !== undefined && routeParams.cart !== null) {
        this.cartItems = this.cartUrlUtil.getJSONFromUrl(routeParams.cart);
      } else {
        console.log("cart undefined or null!!!");
      }
    });
  }

  getProducts() : void {
    this.productSvc.getProducts().subscribe(products => this.products = products);
  }

  addCartItem(prod: Product) : void {
    this.cartMsg = "Added to cart: " + prod.Name;
    this.checkIfInArray(new CartItem(prod, 1));
  }

  checkIfInArray(itm: CartItem) : void {
    var len = this.cartItems.length;
    var itmExists = false;

    for(var x = 0; x < len; x++) {
      if(this.cartItems[x].Id === itm.Id) {
        this.cartItems[x].Count++;
        itmExists = true;
        console.log("ITEM EXISTS: " + itm.Name);
        break;
      }
    }

    if(!itmExists) { this.cartItems.push(itm); }

  }

  viewCart() : void {
    console.log("In viewCart()...");
    console.log("JSON CART LIST: " + btoa(JSON.stringify(this.cartItems)));
    this.router.navigate(['/viewcart', btoa(JSON.stringify(this.cartItems))]);
  }

  getTotalItmsInCart(): number {
    var total = 0;
    this.cartItems.forEach(function(curItm) {
      total += curItm.Count;
    });
    return total;
  }

  checkout(): void {
    this.router.navigate(['/paymentdetails', this.cartUrlUtil.base64EncodeObject(this.cartItems)]);
  }

}
