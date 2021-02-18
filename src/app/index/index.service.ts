import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private url: string = 'https://api.zoansoftware.com/getproducts';
  private deleteurl:string='https://api.zoansoftware.com/deleteproduct';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    return this.http.get(this.url)
  }
  deleteProduct(id:string):Observable<any>{
    return this.http.post(this.deleteurl,{id:id});
  }
}

