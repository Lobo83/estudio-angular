import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { WrongUrl404ComponentComponent } from './wrong-url404-component/wrong-url404-component.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [{
  path: '', component: HomeComponent

}, {
  path: 'product/:id', component: ProductDetailComponent,
  canActivate: [LoginGuard],
  children: [{
    path: '', component: ProductDescriptionComponent
  }, {
    path: 'seller/:id', component: SellerInfoComponent
  }]
},
{ path: '**', component: WrongUrl404ComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
