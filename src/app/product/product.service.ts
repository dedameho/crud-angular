import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url:string='http://localhost:3050/getproduct'
  constructor(private http:HttpClient) { }
  getProduct(id:string):Observable<any>{
    return this.http.post(this.url,{id});
  }
}
