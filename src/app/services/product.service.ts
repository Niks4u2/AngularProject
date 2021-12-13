import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.baseUrl;

  _url = this.baseUrl+"products/";

  _url_delete = "https://kitchen-story-spring-angular.herokuapp.com/products/delete/";

  _url_search = "https://kitchen-story-spring-angular.herokuapp.com/products/";

  constructor(private http: HttpClient) { }

  addProduct(product: any)
  {
      return this.http.post<any>(this._url, product, {responseType: 'text' as 'json'});
  }

  getProducts()
  {
    return this.http.get<any>(this._url);
  }

  public deleteProduct(prodId: string)
  {
    return this.http.delete(this._url+"delete/"+prodId, {responseType: 'text' as 'json'});
  }

  public searchProductByName(productName: string)
  {
    return this.http.get<any>(this._url+productName);
  }

}
