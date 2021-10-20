import { Component, OnInit } from '@angular/core';
import { AbstractProductService, Product } from '../shared/abstract-product-service.service';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{provide: AbstractProductService, useClass:ProductService}]
})
export class HomeComponent implements OnInit {

  products : Product[] = [];
  constructor(private productService:AbstractProductService) { }

  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }

}
