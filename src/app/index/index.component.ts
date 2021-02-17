import { Component, OnInit } from '@angular/core';
import { IndexService } from './index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private products:IndexService) { }
  public productos=[]
  ngOnInit(): void {
    this.products.getProducts().subscribe(res=>{
      this.productos=res;
      console.log(this.productos)
    })
  }

}
