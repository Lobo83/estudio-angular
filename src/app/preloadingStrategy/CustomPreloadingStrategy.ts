import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { of, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class MyCustomPreloadingStrategy implements PreloadingStrategy{
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        console.log('Preload Path: ' + route.path);
        if (route.data && route.data['preloadme']) {
            return load();
          } else {
            return of(null);
          }
    }
    
}