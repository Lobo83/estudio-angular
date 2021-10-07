import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId: string="";
  sellerId = 123;
  router: ActivatedRoute;
  constructor(router: ActivatedRoute) {
    //this.productId = router.snapshot.paramMap.get('id')|| ""; esto no vale si se introduce manualmente la direccion en el navegador. Mejor suscribirse
    this.router=router;
   }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params : ParamMap)=> {  
      this.productId=params.get('id')||"";  
      
    });  
  }

}
