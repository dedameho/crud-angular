import { Toast } from 'materialize-css';
import { Component, OnInit } from '@angular/core';
import { IndexService } from './index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private products: IndexService) { }
  public productos = []
  ngOnInit(): void {
    this.products.getProducts().subscribe(res => {
      this.productos = res;
    })
  }
  eliminarProducto(id: string, index: number) {
    const rol = localStorage.getItem('rol');
    if (rol != 'admin') {
      new Toast({
        html: 'No tienes permisos suficientes',
        classes: 'red'
      })
    } else {
      this.products.deleteProduct(id).subscribe((res) => {
        if (res.status == 'ok') {
          new Toast({
            html: `${res.message}`,
            classes: 'green'
          })
          this.productos.splice(index, 1);
        } else {
          new Toast({
            html: `${res.message}`,
            classes: 'red'
          })
        }
      })
    }
  }

}
