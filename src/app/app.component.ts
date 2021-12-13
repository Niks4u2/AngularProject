import { Component } from '@angular/core';
import { Product } from './models';
import { UserLoginService } from './services/user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kitchen-story';
  cartItems: Product[] = [];

  constructor(private _authService: UserLoginService) {}
  
  getItemsCount(): number
  {
    this.cartItems = JSON.parse(localStorage.getItem('items')!);
    if(this.cartItems == null) {
      return 0;
    }
    else{
      return this.cartItems.length;
    }
  }

  service = this._authService;

  getLoggedInUser()
  {
    return localStorage.getItem('email');
  }

}
