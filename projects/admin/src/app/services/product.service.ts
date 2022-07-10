import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(categoryId?: string) {
    let params = new HttpParams();
    if (categoryId) {
      params = params.append('categories', categoryId);
    }
    return this.http.get<Product[]>('http://localhost:3000/eshop/home/products/', {
      params: params,
    });
  }

  getProduct(id: string) {
    return this.http.get<Product>(
      `http://localhost:3000/eshop/home/products/${id}`
    );
  }

  sendMail() {
    return this.http.post(
      `http://localhost:3000/eshop/home/products/email`,
      'email'
    );
  }

  addProduct(product: FormData) {
    return this.http.post<Product>(
      'http://localhost:3000/eshop/home/products/',
      product
    );
  }

  updateProduct(product: any, productId: string) {
    return this.http.put(
      `http://localhost:3000/eshop/home/products/${productId}`,
      product
    );
  }

  deleteProduct(id: string) {
    return this.http.delete(`http://localhost:3000/eshop/home/products/${id}`);
  }

  getProductNumber() {
    return this.http.get('http://localhost:3000/eshop/home/products/get/count');
  }


}
