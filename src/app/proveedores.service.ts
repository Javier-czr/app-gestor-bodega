import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor() { }

  listSupplier: any[] = [];

  addSupplier(supplier: any) {
    this.listSupplier.push(supplier);
  }
}
