import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AbstractProductService, Product } from '../shared/abstract-product-service.service';
import { ProductService } from '../shared/product.service';


/**
 *
 *
 * @export
 * @class ProductDetailComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [{provide: AbstractProductService, useClass:ProductService}]
})
export class ProductDetailComponent implements OnInit {

  
  sellerId = 123;
  router: ActivatedRoute;
  product?: Product;
  /**
   * Creates an instance of ProductDetailComponent.
   * @param {ActivatedRoute} router
   * @param {AbstractProductService} productService
   * @memberof ProductDetailComponent
   */
  constructor(router: ActivatedRoute, private productService: AbstractProductService) {
    //this.productId = router.snapshot.paramMap.get('id')|| ""; esto no vale si se introduce manualmente la direccion en el navegador. Mejor suscribirse
    this.router=router;
   }

  /**
   *
   *
   * @memberof ProductDetailComponent
   */
  ngOnInit(): void {
    var productId:number;
    this.router.paramMap.subscribe((params : ParamMap)=> {  
      productId=parseInt(params.get('id') || "0");   
      this.product=this.productService.getProductById(productId);
    });  
    

  }

}
