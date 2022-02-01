import { Component, OnInit } from '@angular/core'
import { SignupComponent, SignupStatus } from './signup/signup.component'
import { LoginComponent, LoginStatus } from './login/login.component'
import { AuthHomeComponent } from './auth-home/auth-home.component'
import AuthService, { defaultNoLoginAuthState } from '../services/auth.service'

// mutually exclusive vars - only one true.
const DefaultState = {
  'signup': false,
  'login': false,
  'logout': false,
  'home': false,
}

@Component({
  selector: 'app-mgmt',
  templateUrl: './user-mgmt.component.html',
  styleUrls: ['./user-mgmt.component.scss']
})
export class UserMgmtComponent implements OnInit {

  // nested changes inside state, do not trigger re-render.
  state = DefaultState
  // _reload: boolean = true

  loggedIn: boolean = false
  maxSignupAttempts = 3
  disableSignupDuration = 3 * 60 * 1000

  accountCreated: boolean = false
  msgToDisplay: string = ''

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    // this._reload = true
    this.state = {
      signup: false,
      login: false,
      logout: false,
      home: true,
    }
  }
  setState(key: string, val: boolean) {
    this.state = {
      ...DefaultState,
      ...{ [key]: val }
    }
    // this._reload = false
    // setTimeout(() => { }, 0)
    // this._reload = true
  }

  handleSignupStatus = (e: SignupStatus) => {
    console.log('user-mgmt-component: handleSignupStatus: ', e)
      if (e.success) {
        this.msgToDisplay = `Account ${e.email} successfully created.`
      } else {
        this.msgToDisplay = `Failed to create Account ${e.email}.`
      }
      this.setState('home', true)
  }

  handleLoginStatus = (e: LoginStatus) => {
      if (e.success) {
        this.msgToDisplay = `Welcome ${e.email}`
        this.setState('home', true)
      }
  }

  handleActionRequest = (e: string) => {
    console.log('user-mgmt: handleActionRequest: e: ', e)
      if (e === 'signup') {
        this.msgToDisplay = 'Create a new account with a new Email address'
        this.setState('signup', true)
      } else if (e === 'login') {
        this.msgToDisplay = ''
        this.setState('login', true)
      } else if (e === 'logout') {
        this.authService.setAuthState({
          ...defaultNoLoginAuthState
        })
        // there is no 'logout' page.  so home again.
        this.setState('home', true)
      }
  }
}
