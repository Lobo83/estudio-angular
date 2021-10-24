import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  constructor() { }
  ngAfterViewInit(): void {
    let keyupEvent$ = fromEvent<Event>(this.productPrice?.nativeElement, 'keyup');
    let keyupValue$ = keyupEvent$.pipe(debounceTime(500),map(event => event?.target as HTMLInputElement)).subscribe(value =>doSomethingFancy(value));
  }

  ngOnInit(): void {
  }

}
function doSomethingFancy(value: HTMLInputElement): unknown {
  console.log("valor puesto "+value.value);
  return value;
}

