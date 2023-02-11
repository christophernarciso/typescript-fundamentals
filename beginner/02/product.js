"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, desc, url, inStock) {
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
exports.Product = Product;
let newProduct = new Product("Orange T-Shirt", "A colorful t-shirt", "someUrl", false);
newProduct.display();
