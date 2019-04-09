import { CartItem } from './cartItem-model';
import { CartCustomer } from './cartCustomer-model';

export class ShoppingCart {
    items: CartItem[];
    cartCustomer: CartCustomer;

    constructor() {
        this.items = new Array();
        this.cartCustomer = new CartCustomer();
    }
    getCartTotal(): number {
        var total = 0;
        this.items.forEach(function(itm){
            total += itm.Price * itm.Count;
        });

        return total;
    }

    getTotalItemsInCart(): number {
        var total = 0;
        this.items.forEach(function(itm) {
            total += itm.Count;
        });

        return total;
    }
}