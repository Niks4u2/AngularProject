import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];
  total: number= 0;

  constructor(private router: Router) { }

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
    if(this.cartItems.length == 0)
    {
      window.location.reload();
    }else{
      this.reloadComponent();
    }
  }

  getTotal()
  {
    for (var product of this.cartItems) {
      this.total += product.price;
    }
  }

  reloadComponent() {
  let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }

}
