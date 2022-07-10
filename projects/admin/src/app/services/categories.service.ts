import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
  getCategories():Observable <Category[]> {
    return this.http.get<Category[]>(
      'http://localhost:3000/eshop/home/categories/'
    );
  }

  getCategory(id: string) {
    return this.http.get<Category>(
      `http://localhost:3000/eshop/home/categories/${id}`
    );
  }

  addCategory(category: Category) {
    return this.http.post('http://localhost:3000/eshop/home/categories/', category);
  }

  updateCategory(category: Category) {
    return this.http.put(`http://localhost:3000/ehop/home/categories/${category.id}`, category);
  }

  deleteCategory(id: string) {
    return this.http.delete(`http://localhost:3000/eshop/home/categories/${id}`);
  }
}

