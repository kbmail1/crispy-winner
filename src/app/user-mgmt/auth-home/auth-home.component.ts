import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss']
})
export class AuthHomeComponent implements OnInit {

  @Output() actionEmitter = new EventEmitter<string>()
  action: string = '' // stay here.

  constructor() {
    this.action = ''
  }

  ngOnInit(): void {
  }

  handleSignupClick(e: Event) {
    console.log('handleSignupClick: emitting: signup event')
    this.action = 'signup'
    this.actionEmitter.emit(this.action)
  }

  handleLoginClick(e: Event) {
    this.action = 'login'
    this.actionEmitter.emit(this.action)
  }
}
