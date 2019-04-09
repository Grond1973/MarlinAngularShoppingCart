import { Product } from './product-model';

export class CartItem extends Product {
    Count: number;

     constructor(prod: Product, count: number) {
        super(prod);
        this.Count = count;
     }
}