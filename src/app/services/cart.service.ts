import { Injectable } from '@angular/core';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Product[] = [];

  constructor() { }

  addItem(product: Product)
  {
    this.cartItems.push(product);
    localStorage.setItem('items', JSON.stringify(this.cartItems));
  }

  getItemCount(): number
  {
    console.log(this.cartItems.length)
    return this.cartItems.length;
  }
}
