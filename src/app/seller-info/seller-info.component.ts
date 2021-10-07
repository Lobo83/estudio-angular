import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {

  sellerId: string="";
  router: ActivatedRoute;
  constructor(router: ActivatedRoute) {
    this.router=router;
   }

  ngOnInit(): void {
    this.router.paramMap.subscribe((paramMap: ParamMap)=>
        {this.sellerId=paramMap.get('id')||"";}
      )
  }

}
