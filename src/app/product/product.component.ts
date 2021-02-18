import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private idProduct:string;
  public productEdit:FormGroup;
  public nuevaFoto:File;
  public producto:[];
  constructor(private product:ProductService,private route:ActivatedRoute,private form:FormBuilder) {
    route.params.subscribe(params=>{
      const productId = params.id;
      this.idProduct=productId;
      this.product.getProduct(this.idProduct).subscribe(res=>{
        this.producto=res;
        res.forEach(element=>{
          console.log(element.nombre);
        })
        console.log(this.producto)
      })
    })
  }

  ngOnInit(){
    this.productEdit=this.form.group({
      codigo:new FormControl('',Validators.required),
      referencia:new FormControl('',Validators.required),
      nombre:new FormControl('',Validators.required),
      foto:new FormControl('',Validators.required),
      ubicacion:new FormControl('',Validators.required),
      sede_bodega:new FormControl('',Validators.required),
      descripcion:new FormControl('',Validators.required)
    })
  }
  seleccionarFoto(file:File){
    this.nuevaFoto=file[0];
  }

}
