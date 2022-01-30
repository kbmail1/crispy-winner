import { Component, OnInit } from '@angular/core';
import AuthService from '../services/auth.service'
import axios from 'axios'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  // put this in a state object so false/true settings are correct */
  showSignupForm: boolean = false
  showLoginForm: boolean = false
  showEnterCodeForm: boolean = false
  accountCreated: boolean = false

  loggedIn = false
  email: string = ''
  password: string = ''
  code: string = ''

  constructor(
    private authService: AuthService,
  ) {
    this.showSignupForm = false
    this.showLoginForm = false
    this.showEnterCodeForm = false
    this.accountCreated = false
    this.loggedIn = false
  }

  ngOnInit(): void {
  }

  doShowNoForm(): boolean {
    return (
      !this.showEnterCodeForm &&
      !this.showLoginForm &&
      !this.showSignupForm &&
      !this.accountCreated &&
      !this.loggedIn
    )
  }

  todo = () => {
    console.log('in todo() handler => Placeholder handler')
  }

  handleShowLoginForm = () => {
    this.showLoginForm = true

    this.showSignupForm = false
    this.showEnterCodeForm = false
    this.accountCreated = false
    this.loggedIn = false
  }

  handleShowSignupForm = () => {
    this.showSignupForm = true

    this.showEnterCodeForm = false
    this.showLoginForm = false
    this.accountCreated = false
    this.loggedIn = false
  }



  handleValidateSignupCode = () => {
    // yay
    console.log('in validateSignupCode() handler')
    this.accountCreated = true

    this.showSignupForm = false
    this.showLoginForm = false
    this.showEnterCodeForm = false
    this.loggedIn = false
  }

  handleSignUp = () => {
    console.log('in signup handler')
    this.showEnterCodeForm = true

    this.showSignupForm = false
    this.showLoginForm = false
    this.accountCreated = false
    this.loggedIn = false
    console.log('signup')

    // receive email in form as argument.
    let email = 'kundan.bapat@gmail.com'
    let code = '' + Math.floor(Math.random() * 10000)
    localStorage.setItem(email, code)
    setTimeout(() => { localStorage.removeItem(email) }, 5 * 60 * 1000)

    axios.post('https://localhost:8888/signup', {
      email,
      code,
    })
      .then(() => {
        console.log('sent email-send POST request to server')
      })
  }

  handleLogin = () => {
    console.log('in login() handler')
    this.showLoginForm = false

    this.showEnterCodeForm = false
    this.showSignupForm = false
    this.accountCreated = false

    this.loggedIn = true

    // TODO: Decide what to show If Login success or failure.
  }
}
