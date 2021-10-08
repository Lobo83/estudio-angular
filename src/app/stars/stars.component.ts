import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'] 
  /*Nota, este componente requiere hacer npm i material-design-icon para tener iconos.
  adicionalmente hay que hacer en angular.json, en las estructuras de styles:
  ./node_modules/material-icons/dist/css/material-design-icons.min.css

  tambien hay que retocar stars.component.css para definir estilos locales
  
  mas info en angular development with typescript pagina 74

  */
})
export class StarsComponent implements OnInit {

  @Input() count = 5;
  @Input() rating = 0;
  stars : boolean[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i=1 ; i<=this.count; i++){
      this.stars.push(i>this.rating);
    }
  }

}
