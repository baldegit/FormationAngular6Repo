import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageInterceptorService implements HttpInterceptor {

  cache = new Map();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent<any>> {
    // console.warn('Intercep ', req.);

    // return next.handle(req);

    req = req.clone({
      setHeaders: {
        'API_TOKEN': 'ORSYS'
      }
    });

    if (req.method === 'GET') {
      console.log('CACHED', this.cache);
    }

    return next.handle(req).pipe( tap (res => {
      console.log('Interceptor ', res);
    }));

  }

  constructor() { }
}
