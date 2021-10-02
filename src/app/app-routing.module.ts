import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WrongUrl404ComponentComponent } from './wrong-url404-component/wrong-url404-component.component';

const routes: Routes = [{
  path: '', component: HomeComponent
  
},{path: 'product/:id', component: ProductDetailComponent}
,{path: '**', component: WrongUrl404ComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
