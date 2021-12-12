import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  cartItems: Product[] = [];
  total: number= 0;

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

  getTotal()
  {
    for (var product of this.cartItems) {
      this.total += product.price;
    }
  }

}
