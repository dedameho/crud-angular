import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule , HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component'
import { SignupService } from './signup/signup.service';
import { AuthGuard , GuardGuard } from './guard/auth.guard';
import { AddComponent } from './add/add.component';
import { TokenInterceptor } from './http.interceptor';
import { IndexService } from './index/index.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    IndexComponent,
    SignupComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService,SignupService,AuthGuard,GuardGuard,IndexService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
