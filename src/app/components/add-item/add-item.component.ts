import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  message = "Product added Successfully";
  action = "Add More";

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  productForm: FormGroup = {} as FormGroup;

  product : Product = {} as Product;

  msg: any;

  constructor(private formBuilder: FormBuilder, private service: ProductService,
              private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  onSubmit()
  {
    this.product = this.productForm.value;
    this.service.addProduct(this.product).subscribe(data => this.msg = data);
    this.router.navigateByUrl('admin');
  }

  openSnackBar(message: string, action: string)
  {
    this.snackBar.open(message, action, {duration: 4000, horizontalPosition: this.horizontalPosition, 
                                        verticalPosition: this.verticalPosition});
  }
}
