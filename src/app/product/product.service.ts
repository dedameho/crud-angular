import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url:string='https://api.zoansoftware.com/product'
  constructor(private http:HttpClient) { }
  getProduct(id:string):Observable<any>{
    return this.http.post(this.url,{id});
  }
  actualizarProducto(idproduct:string,codigo:string,referencia:string,nombre:string,ubicacion:string,sede_bodega:string,descripcion:string,foto?:File):Observable<any>{
    const formData = new FormData();
    formData.append('idproducto',idproduct);
    formData.append('nombre',nombre);
    formData.append('codigo',codigo);
    formData.append('referencia',referencia);
    formData.append('ubicacion',ubicacion);
    formData.append('sede_bodega',sede_bodega);
    formData.append('descripcion',descripcion);
    if(foto){
      formData.append('foto',foto);
    }
    return this.http.put(this.url,formData);
  }
}
