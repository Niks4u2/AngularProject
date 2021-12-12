import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getItems();
    this.getTotal();
  }

  getItems()
  {
    this.cartItems = JSON.parse(localStorage.getItem('items')!);
    return this.cartItems;
  }

  removeFromCart(productName: string)
  {
    this.cartItems = this.cartItems.filter(item => item.productName !== productName);
    localStorage.setItem('items', JSON.stringify(this.cartItems));
    window.location.reload();
  }

  total: number= 0;

  getTotal()
  {
    for (var product of this.cartItems) {
      this.total += product.price;
    }
  }

}
