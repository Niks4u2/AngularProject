import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { Product } from './models';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { UserLoginService } from './services/user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kitchen-story';
  cartItems: Product[] = [];

  constructor(private _authService: UserLoginService, private cartService: CartService) {}
  
  getItemsCount(): number
  {
    this.cartItems = JSON.parse(localStorage.getItem('items')!);
    return this.cartItems.length;
  }

  service = this._authService;

  
  getLoggedInUser()
  {
    return localStorage.getItem('email');
  }

}
