import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = environment.baseUrl

  constructor(private http : HttpClient) { }

  getCategories() {
    return this.http.get(`${this.baseUrl}/categories/`)
  }

  getCategorieById(idCategory:any) {
    return this.http.get(`${this.baseUrl}/categories/${idCategory}`)
  }

  postCategories(dados: any) {
    return this.http.post(`${this.baseUrl}/categories/`, dados)
  }
}
