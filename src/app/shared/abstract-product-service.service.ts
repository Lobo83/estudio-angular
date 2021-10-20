import { Injectable } from '@angular/core';

export class Product {
  
  constructor(
    public id?: number,
    public title?: string,
    public price?: number,
    public rating?: number,
    public description?: string,
    public categories?: string[]
  ) { }

}

/**
 * Abstract product service
 *
 * @export
 * @abstract
 * @class AbstractProductService
 */
@Injectable({
  providedIn: 'root'
})
export abstract class AbstractProductService {

  constructor() { }

  /**
   * get a list of product with no filter
   *
   * @abstract
   * @return {*}  {Product[]}
   * @memberof AbstractProductService
   */
  abstract getProducts(): Product[];
  /**
   * get a product by its id
   *
   * @abstract
   * @param {number} productId
   * @return {*}  {Product}
   * @memberof AbstractProductService
   */
  abstract getProductById(productId:number): Product;
}
