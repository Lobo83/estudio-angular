import { Injectable } from '@angular/core';
import { AbstractProductService, Product } from './abstract-product-service.service';


const products = [{
  'id': 1,
  'title': 'Producto 1',
  'price': 23.3,
  'rating': 4.5,
  'description': 'lorem ipsum',
  'categories': ['electronic', 'hardware']
},
{
  'id': 2,
  'title': 'Producto 2',
  'price': 24.3,
  'rating': 3.5,
  'description': 'lorem ipsum',
  'categories': ['electronic', 'hardware']
},
{
  'id': 3,
  'title': 'Producto 3',
  'price': 233.3,
  'rating': 1.5,
  'description': 'lorem ipsum',
  'categories': ['electronic', 'hardware']
},
{
  'id': 4,
  'title': 'Producto 4',
  'price': 233.3,
  'rating': 1.5,
  'description': 'lorem ipsum',
  'categories': ['electronic', 'hardware']
}];
/**
 * Product Service
 *
 * @export
 * @class ProductService
 * @extends {AbstractProductService}
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractProductService {

  constructor() { super();}
  /**
   *
   *
   * @return {*}  {Product[]}
   * @memberof ProductService
   */
  getProducts(): Product[] {
    //Ojo que products es una constante de objetos json, formalmente no esta tipado como Product. También, si cambias el nombre de algun atributo, la linea de abajo falla. Interesante
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }
  /**
   *
   *
   * @param {number} productId
   * @return {*}  {Product}
   * @memberof ProductService
   */
  getProductById(productId:number): Product{
    var product = products.find(p=>p.id===productId);
    return new Product(product?.id||0,product?.title||"",product?.price||0,product?.rating||0,product?.description||"",product?.categories||[]);
  }
}
