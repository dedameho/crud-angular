import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validarQueSeanIguales } from '../app.validators';
import { SignupService } from './signup.service';
import { Toast } from 'materialize-css';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: FormGroup;
  constructor(private form:FormBuilder,private signupService:SignupService){

  }
  ngOnInit() {
    this.user=this.form.group({
      name: new FormControl('',Validators.required),
      last_name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      passwordConfirm:new FormControl('',[Validators.required,Validators.minLength(8)])
    },{
      validators: validarQueSeanIguales,
    })
  }
  onSubmit(){
    const user=this.user.value;
    this.signupService.signUp(user.name,user.last_name,user.email,user.password).subscribe(res=>{
      let {status} = res
      if(status=='ok'){
        new Toast({
          html:'Registro Exitoso',
          classes:'green'
        })
      }else if(res.error.code=="ER_DUP_ENTRY"){
        new Toast({
          html:'Email en uso',
          classes:'red'
        })
      }
    })
  }


}
