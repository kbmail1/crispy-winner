import { Component, OnInit } from '@angular/core'
import { SignupComponent, SignupStatus } from './signup/signup.component'
import { LoginComponent } from './login/login.component'
import { AuthHomeComponent } from './auth-home/auth-home.component'

// mutually exclusive vars - only one true.
const DefaultState = {
  'signup': false,
  'login': false,
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

  constructor() {}

  ngOnInit() {
    // this._reload = true
    this.state = {
      signup: false,
      login: false,
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

  handleSignupStatus = (e: any) => {
    console.log('user-mgmt-component: handleSignupStatus: ', e)
    let status = e as SignupStatus

    if (status.success) {
      this.msgToDisplay = `Account ${status.email} successfully created.`
    } else {
      this.msgToDisplay = `Failed to create Account ${status.email}.`
    }
    this.setState('home', true)
  }

  handleLoginStatus = (e: any) => {
    // for now assuming success
    if (e.success) {
      this.msgToDisplay = `Welcome ${e.email}`
    }
    this.setState('home', true)
  }

  handleActionRequest = (e: String) => {
    console.log('user-mgmt: handleActionRequest: e: ', e)
    if (e === 'signup') {
      this.setState('signup', true)
    } else if ('login') {
      this.setState('login', true)
    }
  }
}
