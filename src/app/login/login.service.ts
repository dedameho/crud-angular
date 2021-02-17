import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = 'http://localhost:3050/login'
  constructor(private http: HttpClient,private router:Router) { }
  login(email: string, password: string): Observable<any> {
    return this.http.post(this.url, { email, password })
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    this.router.navigate(['/login']);
  }

  public isLoggedIn():boolean {
    let logged = moment().isBefore(this.getExpiration())
    return logged;
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expiration");
    let expiracion = moment(expiration).format('YYYY-MM-DD HH:mm:ss');
    return expiracion;
  }
}
