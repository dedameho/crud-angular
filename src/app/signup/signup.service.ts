import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url:string = 'https://api.zoansoftware.com/signup';
  constructor(private http:HttpClient) { }

  signUp(name:string,last_name:string,email:string,password:string):Observable<any>{
    return this.http.post(this.url,{name,last_name,email,password})
  }
}
