import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SendBehaviorComponent } from '../send-behavior/send-behavior.component';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {
  private data$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  getDataObservable(): Observable<string> {
    return this.data$.asObservable()
  }

  sendMsg (msg: string): void {
    this.data$.next(msg)
  }

}