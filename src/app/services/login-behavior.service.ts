import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginBehaviorService {
  private data$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  getDataObservable(): Observable<string> {
    return this.data$.asObservable()
  }

  sendMsg (msg: string): void {
    this.data$.next(msg)
  }

}