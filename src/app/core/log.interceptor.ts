import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse} from '@angular/common/http';
import {tap} from 'rxjs/operators';



@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Url utilisée : ' + req.urlWithParams);
    const start = new Date().getTime(); // J'affiche l'url avec les params
    // Je passe la requête à la suite des interceptors cachés d'angular
    // Et je retourne ce résultat pour que la requête ait bien lieu
    return next.handle(req).pipe(
      tap((reponse) => {
        if (reponse instanceof HttpResponse) {
          const elapsed = new Date().getTime() - start;
          console.log('Temps total qu\'à pris la requête : ' + elapsed + 'ms');
        }
      })
    );
  }
}

