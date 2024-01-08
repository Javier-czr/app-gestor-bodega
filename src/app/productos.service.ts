import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  listProduct: any[] = [];

  addProduct(product: any) {
    this.listProduct.push(product);
  }
}
