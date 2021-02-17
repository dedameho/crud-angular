import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private url: string = 'http://localhost:3050/getproducts'
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    return this.http.get(this.url)
  }
}

