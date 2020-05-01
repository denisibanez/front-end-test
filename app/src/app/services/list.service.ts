import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  baseUrl = environment.baseUrl

  idCategory: any

  constructor(private http : HttpClient) { }

  getLists(idCategory:any) {
    return this.http.get(`${this.baseUrl}/categories/${idCategory}/lists`)
  }

  getListsById(idCategory:any, idList:any) {
    return this.http.get(`${this.baseUrl}/categories/${idCategory}/lists/${idList}`)
  }

  postLists(idCategory:any, dados: any) {
    return this.http.post(`${this.baseUrl}/categories/${idCategory}/lists`, dados)
  }
}
