import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginBehaviorService } from '../services/login-behavior.service';

@Component({
  selector: 'app-get-behavior',
  templateUrl: './get-behavior.component.html',
  styleUrls: ['./get-behavior.component.scss']
})
export class GetBehaviorComponent implements OnInit, OnDestroy {

  receivedMsg: string = ''
  bobservable$: Observable<string> | null = null

  constructor(
    private bservice: LoginBehaviorService
  ) { }

  ngOnInit() {
    this.bobservable$ = this.bservice.getDataObservable()
      this.bobservable$!.subscribe(msg => { this.receivedMsg = msg })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.bobservable$ = null
  }
}
