import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  baseUrl = environment.baseUrl

  constructor(private http : HttpClient) { }

  getItems(idCategory:any, idList:any) {
    return this.http.get(`${this.baseUrl}/categories/${idCategory}/lists/${idList}/items`)
  }

  postItems(idcategory:any, idList:any, dados: any) {
    return this.http.post(`${this.baseUrl}/categories/${idcategory}/lists/${idList}/items/`, dados)
  }

  ubpdateItems(idcategory:any, idList:any, dados: any) {
    return this.http.put(`${this.baseUrl}/categories/${idcategory}/lists/${idList}/items/${dados.id}`, dados)
  }

}
