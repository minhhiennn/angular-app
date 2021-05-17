import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { products } from 'src/assets/data.json';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = []; 
  constructor() {
    for (let i = 0; i < products.length; i++) {
      let product = new Product(products[i].id, products[i].price, products[i].name, products[i].img)
      this.products.push(product);
    }
  }
  // TODO: GET ALL LIST PRODUCT
  getProducts(): Product[] {
    return this.products;
  }
  //getProductById(productId: number): Product | null {
  //  let product: Product | null = null;
  //  for (let i = 0; i < this.products.length; i++) {
  //    if (this.products[i].id === productId) {
  //      product = this.products[i];
  //    }
  //  }
  //  return product;
  //}
  getProductsByName(name: string): Product[] {
    let productList: Product[] = [];
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].getName().toLowerCase().includes(name.toLowerCase())) {
        productList.push(this.products[i]);
      }
    }
    return productList;
  }
}
