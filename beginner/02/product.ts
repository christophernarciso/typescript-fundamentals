export class Product {
    name: string;
    desc: string;
    url: string;
    inStock: boolean;

    constructor(name: string, desc: string, url: string, inStock: boolean) {
        this.name = name;
        this.desc = desc;
        this.url = url;
        this.inStock = inStock;
    }


    // can use protected / private 
    display() {
        return `
        "product": {
            "name": ${this.name},
            "description": ${this.desc},
            "productUrl": ${this.url},
            "inStock": ${this.inStock}
        }`;
    }
}

let newProduct = new Product("Orange T-Shirt", "A colorful t-shirt", "someUrl", false);
newProduct.display();