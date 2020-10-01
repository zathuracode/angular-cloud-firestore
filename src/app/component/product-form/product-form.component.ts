import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product={} as Product;

  constructor(public productService:ProductService) { }

  ngOnInit(): void {
  }

  save(){
    this.productService.save(this.product);
  }

}
