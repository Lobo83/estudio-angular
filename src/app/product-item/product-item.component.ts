import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/abstract-product-service.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product?: Product;
  constructor() { }

  ngOnInit(): void {
    
  }

  getProductDescription():string{
    return this.product?.description||"";
  }
}
