export class Product {
    Id: number;
    Name: string;
    Description: string;
    Price: number;

    constructor(product: Product) {
        this.Id = product.Id;
        this.Description = product.Description;
        this.Name = product.Name;
        this.Price = product.Price;
    }
}