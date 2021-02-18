import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AddService {
  private url:string = 'https://api.zoansoftware.com/add'
  constructor(private http:HttpClient) { }
  subirProducto(codigo:string,referencia:string,nombre:string,foto:File,ubicacion:string,sede_bodega:string,descripcion:string):Observable<any>{
    const formData = new FormData();
    formData.append('nombre',nombre);
    formData.append('codigo',codigo);
    formData.append('referencia',referencia);
    formData.append('foto',foto);
    formData.append('ubicacion',ubicacion);
    formData.append('sede_bodega',sede_bodega);
    formData.append('descripcion',descripcion);
    return this.http.post(this.url,formData);
  }
}
