import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categories:string[]=['telefono','ordenador','perifericos'];
  constructor() { }

  ngOnInit(): void {
  }

}
