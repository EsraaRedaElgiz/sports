import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductStaticService {
  baseURL: string = environment.apiUrl;

  constructor(public http: HttpClient) {}
  //read
  getAllProduct() {
    return this.http.get(this.baseURL);
  }
  //read
  getProductId(id: any) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  //delete
  deleteProduct(id: any) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  // create
  addProduct(product: any) {
    return this.http.post(this.baseURL, product);
  }
  // update
  editProduct(id: any, product: any) {
    return this.http.put(`${this.baseURL}/${id}`, product);
  }
}
