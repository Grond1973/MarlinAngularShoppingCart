import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product;

  constructor() { }

  ngOnInit() {

    this.product = {
        Id : 0,
        Name: 'Test Product 0',
        Description: 'TEST DESCIRPTION',
        Price: 9.99
    };
  }

}
