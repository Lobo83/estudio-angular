import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  
  sellerId = 123;
  router: ActivatedRoute;
  product?: Product;
  constructor(router: ActivatedRoute, private productService: ProductService) {
    //this.productId = router.snapshot.paramMap.get('id')|| ""; esto no vale si se introduce manualmente la direccion en el navegador. Mejor suscribirse
    this.router=router;
   }

  ngOnInit(): void {
    var productId:number;
    this.router.paramMap.subscribe((params : ParamMap)=> {  
      productId=parseInt(params.get('id') || "0");   
      this.product=this.productService.getProductById(productId);
    });  
    

  }

}
