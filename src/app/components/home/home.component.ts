import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/models';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = "Successfully added to Cart";
  action = "Add More";
  product: Product = {} as Product;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private service: ProductService, private cartService: CartService, 
              private snackBar: MatSnackBar, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.get('searchTerm')){
        let lowerString : string = params.get('searchTerm')!.toLowerCase();
        let titleString : string = lowerString.charAt(0).toUpperCase() + lowerString.slice(1);
        this.getProductByName(titleString);
      }else{
        this.fetchProducts();
      }
    })
  }

  dataSource: Product[] = [];

  fetchProducts()
  {
    return this.service.getProducts().subscribe(data => this.dataSource = data);
  }

  getProductByName(name : string)
  {
      return this.service.searchProductByName(name).subscribe( data => this.product = data);
  }

  addToCart(product: Product)
  {
    this.cartService.addItem(product);
    this.openSnackBar(this.message, this.action);
  }

  openSnackBar(message: string, action: string)
  {
    this.snackBar.open(message, action, {duration: 4000, horizontalPosition: this.horizontalPosition, 
                                        verticalPosition: this.verticalPosition});
  }

}
