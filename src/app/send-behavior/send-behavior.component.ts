import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginBehaviorService } from '../services/login-behavior.service';

@Component({
  selector: 'app-send-behavior',
  templateUrl: './send-behavior.component.html',
  styleUrls: ['./send-behavior.component.scss']
})
export class SendBehaviorComponent implements OnInit {

  constructor(
    private bservice: LoginBehaviorService
  ) { }

  count: number = 1
  ngOnInit() { }

  onClick() {
    console.log('SendBehaviorComponent: onClick: ...')
    this.bservice.sendMsg(`hello world ${this.count}`)
    this.count++
    console.log('SendBehaviorComponent: onClick: ... Sent msg.')
  }
}
