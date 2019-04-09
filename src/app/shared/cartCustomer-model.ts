import { Address } from './address-model';
import { CreditCard } from './creditCard-model';

export class CartCustomer {
    Id: number;
    BillingAddress: Address;
    ShippingAddress: Address;
    creditCard: CreditCard;

    //constructor(id: number, billAddress: Address, shipToAddress: Address, ccard: CreditCard) {
    constructor() {
        this.Id = 0;
        this.BillingAddress = new Address();
        this.ShippingAddress = new Address();
        this.creditCard = new CreditCard();
    }
}