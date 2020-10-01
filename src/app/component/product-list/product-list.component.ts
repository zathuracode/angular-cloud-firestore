import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {

  public products:Product[];
  public subs:Subscription;
  public showForm:boolean=false;
  public product={} as Product;

  constructor(public productService:ProductService) { }

  edit(product:Product):void{
    console.log(product);
    this.showForm=true;
    this.product=product;
  }

  update():void{
    this.productService.update(this.product);
  }

  delete(product:Product):void{
    this.productService.delete(product);
  }

  ngOnInit(): void {
    this.subs=this.productService.getProducts().subscribe(data=>{
      this.products=data;
    });
  }

  ngOnDestroy():void{
    this.subs.unsubscribe();
  }

}
