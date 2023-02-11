"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../02/product");
// Import example: Classes must have the export to be imported as modules.
let newProduct = new product_1.Product("Item1", "Some Item", "Some URL", true);
newProduct.display();
