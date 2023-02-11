"use strict";
class Product {
    constructor(name, desc, url, inStock) {
        this.name = name;
        this.desc = desc;
        this.url = url;
        this.inStock = inStock;
    }
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
