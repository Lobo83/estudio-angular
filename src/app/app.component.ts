import { Component, Inject, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';

export const TOKEN = new InjectionToken<string>('MyToken');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: TOKEN, useValue: 'valor1',multi:true},
  {provide: TOKEN, useValue: 'valor2',multi:true}]
})
export class AppComponent {
  title = 'ngAuction';

  constructor(private _router: Router, @Inject(TOKEN) myInjectedToken: string){
    console.log("holaaaa "+myInjectedToken);
  }
  navigateToProducDetail(){
    this._router.navigate(["/product"],{skipLocationChange: true});
  }
}
