import { Product } from "../02/product";

// Import example: Classes must have the export to be imported as modules.
let newProduct = new Product("Item1", "Some Item", "Some URL", true);
newProduct.display();