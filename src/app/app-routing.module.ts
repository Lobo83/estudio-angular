import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { WrongUrl404ComponentComponent } from './wrong-url404-component/wrong-url404-component.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { LoginGuard } from './guards/login.guard';
import { LazyModule } from './lazy/lazy.module';

const routes: Routes = [{
  path: '', component: HomeComponent

}, {
  path: 'product/:id', component: ProductDetailComponent,
  canActivate: [LoginGuard],
  runGuardsAndResolvers: 'always',
  children: [{
    path: '', component: ProductDescriptionComponent
  }, {
    path: 'seller/:id', component: SellerInfoComponent
  }]
},
//{ path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule'}, -->esta manera no funciona, tampoco con ./lazy/lazy.module
{ path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)},
{ path: '**', component: WrongUrl404ComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
