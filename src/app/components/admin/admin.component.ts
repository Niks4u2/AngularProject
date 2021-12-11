import {Component} from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  message = "Product deleted Successfully";
  action = "Delete More";

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private service: ProductService,private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  displayedColumns: string[] = ['productName', 'price', 'description', 'image', 'delete'];
  dataSource: Product[] = [];

  fetchProducts()
  {
    return this.service.getProducts().subscribe(data => this.dataSource = data);
  }

  public deleteItem(prodId: string)
  {
      this.service.deleteProduct(prodId).subscribe(data => console.log('Delete Success.'));
      this.openSnackBar(this.message, this.action);
      this.ngOnInit();
  }

  openSnackBar(message: string, action: string)
  {
    this.snackBar.open(message, action, {duration: 4000, horizontalPosition: this.horizontalPosition, 
                                        verticalPosition: this.verticalPosition});
  }
}
