import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GuardGuard, AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component:IndexComponent, canActivate:[GuardGuard]},
  { path: 'login', component: LoginComponent,canActivate:[AuthGuard]},
  { path: 'signup', component: SignupComponent,canActivate:[AuthGuard]},
  { path: 'add', component:AddComponent, canActivate:[GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
