import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(e => {
        switch (e.status) {
          case 401: {
            console.log(e);
            break;
          }
          case 403: {
            console.log(e);
            break;
          }
          case 400: {
            console.log(e);
            break;
          }
          case 404: {
            console.log(e);
            break;
          }
          case 500: {
            console.log(e);
            break;
          }
        }
        return throwError(e);
      })
    );
  }
}
