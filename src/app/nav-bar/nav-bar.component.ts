import { Component, OnInit, Injectable } from '@angular/core';
import { LoginService } from './../login/login.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
@Injectable()
export class NavBarComponent implements OnInit {
  public loged:boolean;
  constructor( private auth:LoginService) { }

  ngOnInit(){
    this.loged = this.auth.isLoggedIn();
  }
  public logOut(){
    return this.auth.logout();
  }
  public isLoggedIn(){
    return this.auth.isLoggedIn();
  }

}

