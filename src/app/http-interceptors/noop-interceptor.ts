import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(req); for further piping
    console.log('in interceptor 1')
    console.log('\treq: ', req)
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event)
        }
        return event
      })
      //,catchError((error: HttpErrorResponse) => {
      //  console.log('Response: error in interceptor - ', JSON.stringify(error, null, 2))
      //  return throwError(() => new Error(error.message))
      //})
    )
  }
}