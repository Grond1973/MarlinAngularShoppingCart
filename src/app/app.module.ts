import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './Products/product/product.component';
import { CartDashBoardComponent } from './shoppingCart/cart-dash-board/cart-dash-board.component';
import { ViewCartComponent } from './shoppingCart/view-cart/view-cart.component';
import { PaymentDetailsComponent } from './shoppingCart/checkout/payment-details/payment-details.component';
import { ShippingDetailsComponent } from './shoppingCart/checkout/shipping-details/shipping-details.component';
import { SummaryComponent } from './shoppingCart/checkout/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    CartDashBoardComponent,
    ViewCartComponent,
    PaymentDetailsComponent,
    ShippingDetailsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
