import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ViewCartComponent } from './shoppingCart/view-cart/view-cart.component';
import { PaymentDetailsComponent } from './shoppingCart/checkout/payment-details/payment-details.component';
import { ShippingDetailsComponent } from './shoppingCart/checkout/shipping-details/shipping-details.component';
import { SummaryComponent } from './shoppingCart/checkout/summary/summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: 'products', component: ProductsComponent},
  { path: 'viewcart/:cart', component: ViewCartComponent},
  { path: 'products/:cart', component: ProductsComponent},
  { path: 'paymentdetails/:cart', component: PaymentDetailsComponent },
  { path: 'shippingdetails/:cart', component: ShippingDetailsComponent },
  { path: 'summary/:cart', component: SummaryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
