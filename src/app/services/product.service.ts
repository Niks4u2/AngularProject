import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _url = "http://localhost:5000/products";

  _url_delete = "http://localhost:5000/products/delete/";

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
    return this.http.delete("http://localhost:5000/products/delete/"+prodId, {responseType: 'text' as 'json'});
  }

}
