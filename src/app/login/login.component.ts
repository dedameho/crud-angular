import { Router } from '@angular/router';
import { Toast } from 'materialize-css';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: FormGroup;
  constructor(private from: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.user = this.from.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }
  public onLogin() {
    const user = this.user.value;
    this.loginService.login(user.email, user.password).subscribe((res) => {
      var { status } = res;
      if (status == 'ok') {
        localStorage.setItem('token', res.token);
        localStorage.setItem('expiration', res.expires_at);
        this.router.navigate(['/']);
      } else {
        new Toast({
          html: res.mensaje,
          classes: 'red'
        })
      }
    })
  }

}
