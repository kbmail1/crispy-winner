import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import AuthService from 'src/app/services/auth.service';

export interface LoginStatus {
    email: string,
    success: boolean,
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() loginEmitter = new EventEmitter<LoginStatus>()
  @Output() actionEmitter = new EventEmitter<string>()

  loginStatus: any = null

  email: string = ''
  password: string = ''

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  handleLogin(e: Event) {
    // TODO: validate with backend.
    let success = true
    // to parent user-mgmt, so it can show next appropriate page.
    this.authService.setAuthState({
      loginId: this.email,
      password: '....',
      isAuthenticated: true,
    })
    this.loginEmitter.emit({
        email: this.email,
        success: true,
      })
  }

  handleSignupClick(e: Event) {
    this.actionEmitter.emit('signup')
  }
}