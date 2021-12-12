import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  addressForm: FormGroup = {} as FormGroup;
  cartItems: Product[] = [];
  total: number= 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pin: ['', [Validators.required]],
    });
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
