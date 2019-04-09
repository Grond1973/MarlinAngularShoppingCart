export class CartUrlUtility {
    getJSONFromUrl(rawURL: string): any {
        return JSON.parse(atob(rawURL));
    }

    base64EncodeObject(obj: any): string {
        return btoa(JSON.stringify(obj));
    }
}