import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { of, Observable } from 'rxjs';


@Injectable()
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