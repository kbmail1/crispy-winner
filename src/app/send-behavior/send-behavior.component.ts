import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BehaviorService } from '../services/behavior.service';

@Component({
  selector: 'app-send-behavior',
  templateUrl: './send-behavior.component.html',
  styleUrls: ['./send-behavior.component.scss']
})
export class SendBehaviorComponent implements OnInit {

  constructor(
    private bservice: BehaviorService
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
