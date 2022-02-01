import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import AuthService, { defaultNoLoginAuthState } from 'src/app/services/auth.service';
@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss']
})
export class AuthHomeComponent implements OnInit {

  isAuthenticated = false;
  @Output() actionEmitter = new EventEmitter<string>()

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    let authState = this.authService.getAuthState()
    this.isAuthenticated = authState.isAuthenticated;
  }

  getLatestAuth() {
    return this.authService.getAuthState().isAuthenticated
  }
  handleSignupClick(e: Event) {
    console.log('handleSignupClick: emitting: signup event')
    this.actionEmitter.emit('signup')
  }

  handleLoginClick(e: Event) {
    this.actionEmitter.emit('login')
  }

  handleLogoutClick(e: Event) {
    this.authService.setAuthState({
      ...defaultNoLoginAuthState, ...{ isAuthenticated: false}
    })
    this.actionEmitter.emit('logout')
  }
}
