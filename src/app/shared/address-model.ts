export class Address {
    FirstName: string;
    LastName: string;
    StreetAddress: string;
    City: string;
    State: number;
    ZipCode: string;

    constructor() {
        this.FirstName = "";
        this.LastName = "";
        this.State = 0;
        this.StreetAddress = "";
        this.ZipCode = "";
        this.City = "";
    }
}