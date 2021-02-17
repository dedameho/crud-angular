import { Router } from '@angular/router';
import { Toast } from 'materialize-css';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService } from './add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  producto:FormGroup;
  fotoProducto:File;
  constructor(private form:FormBuilder, private addservice:AddService,private router:Router) { }

  ngOnInit() {
    this.producto=this.form.group({
      codigo:new FormControl('',Validators.required),
      referencia:new FormControl('',Validators.required),
      nombre:new FormControl('',Validators.required),
      foto:new FormControl('',Validators.required),
      ubicacion:new FormControl('',Validators.required),
      sede_bodega:new FormControl('',Validators.required),
      descripcion:new FormControl('',Validators.required)
    })
  }
  subirProducto(){
    var {codigo,referencia,nombre,ubicacion,sede_bodega,descripcion} = this.producto.value;
    this.addservice.subirProducto(codigo,referencia,nombre,this.fotoProducto,ubicacion,sede_bodega,descripcion).subscribe((res)=>{
      if(res.status=='ok'){
        new Toast({
          html:res.message,
          classes:'green'
        })
        this.router.navigate([''])
      }else{
        new Toast({
          html:res.message,
          classes:'red'
        })
      }
      ;
    })
  }
  seleccionarFoto(file:File){
    this.fotoProducto=file[0];
  }


}
