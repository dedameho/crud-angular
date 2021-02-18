import { Toast } from 'materialize-css';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private idProduct:string;
  public productEdit:FormGroup;
  public nuevaFoto:File;
  public fotoProducto:string;
  constructor(private product:ProductService,private route:ActivatedRoute,private form:FormBuilder) {
    route.params.subscribe(params=>{
      const productId = params.id;
      this.idProduct=productId;
      this.product.getProduct(this.idProduct).subscribe(res=>{
        this.fotoProducto=`https://api.zoansoftware.com/${res[0].imagen}`;
        this.productEdit.setValue({
          codigo:`${res[0].codigo}`,
          referencia:`${res[0].referencia}`,
          nombre:`${res[0].nombre}`,
          foto:'',
          ubicacion:`${res[0].ubicacion}`,
          sede_bodega:`${res[0].sede_bodega}`,
          descripcion:`${res[0].descripcion}`
        })
      })
    })
  }

  ngOnInit(){
    this.productEdit=this.form.group({
      codigo:new FormControl(' ',Validators.required),
      referencia:new FormControl(' ',Validators.required),
      nombre:new FormControl(' ',Validators.required),
      foto:new FormControl(''),
      ubicacion:new FormControl(' ',Validators.required),
      sede_bodega:new FormControl(' ',Validators.required),
      descripcion:new FormControl(' ',Validators.required)
    })
  }
  seleccionarFoto(file:File){
    this.nuevaFoto=file[0];
  }
  updateProduct(){
    var {codigo,referencia,nombre,ubicacion,sede_bodega,descripcion} = this.productEdit.value;
    if(this.nuevaFoto){
      this.product.actualizarProducto(this.idProduct,codigo,referencia,nombre,ubicacion,sede_bodega,descripcion,this.nuevaFoto).subscribe((res)=>{
        if(res.status=='ok'){
          new Toast({
            html:'Producto Actualizado',
            classes:'green'
          })
        }else{
          new Toast({
            html:`${res.message}`,
            classes:'red'
          })
        }
      })
    }else{
      this.product.actualizarProducto(this.idProduct,codigo,referencia,nombre,ubicacion,sede_bodega,descripcion).subscribe((res)=>{
        if(res.status=='ok'){
          new Toast({
            html:'Producto Actualizado',
            classes:'green'
          })
        }else{
          new Toast({
            html:`${res.message}`,
            classes:'red'
          })
        }
      })
    }

  }

}
