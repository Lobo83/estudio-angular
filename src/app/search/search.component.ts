import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit, OnInit {

  categories: string[] = ['telefono', 'ordenador', 'perifericos'];

  @ViewChild('productPrice') productPrice?: ElementRef; //ViewChild permite hacer referencia al elemento html que contiene #productPrice
  //es como document.querySelector() de java script

  productTitle = new FormControl(); //recuperacion de valores de formulario mediante FormControl

  //Recuperación de valores mediante Forms API
  constructor() {
    this.productTitle.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(value => doSomethingFancy(value));
    
   }

   //Recuperacion de valores mediante ELementRef
  ngAfterViewInit(): void {
    let keyupEvent$ = fromEvent<KeyboardEvent>(this.productPrice?.nativeElement, 'keyup');
    keyupEvent$.pipe(debounceTime(500),map(event => {let element=event?.target as HTMLInputElement;return element.value}))//esta linea falla en el constructor... debe ser que el elemento no está listo aun en ese momento
    .subscribe(value =>doSomethingFancy(value));
    
  }

  ngOnInit(): void {
  }

}
function doSomethingFancy(value: string): unknown {
  console.log("valor puesto "+value);
  return value;
}

