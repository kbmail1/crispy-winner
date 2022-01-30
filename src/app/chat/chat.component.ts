import { AfterContentInit, Component, ElementRef, OnInit, AfterContentChecked, ViewChild } from '@angular/core';
import AuthService from '../services/auth.service'
import axios from 'axios'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterContentInit {

  @ViewChild('signupCode') signupCode!: ElementRef<HTMLInputElement>;

  // put this in a state object so false/true settings are correct */
  showSignupForm: boolean = false
  showLoginForm: boolean = false
  showEnterCodeForm: boolean = false
  accountCreated: boolean = false

  static MaxSignupAttempts = 3
  errorMsg = ''
  signupAttempts = 0
  loggedIn = false
  password: string = ''
  email: string = ''
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

  ngAfterContentInit() {
    this.errorMsg = ''
  }

  doShowNoForm(): boolean {
    return (
      !this.showEnterCodeForm &&
      !this.showLoginForm &&
      !this.showSignupForm &&
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
    console.log('in validateSignupCode() handler - does email exist in local storage?')
    this.accountCreated = false

    this.showSignupForm = false
    this.showLoginForm = false
    this.showEnterCodeForm = false
    this.loggedIn = false

    const userEnteredCode = this.signupCode.nativeElement.value

    let sessionCode = sessionStorage.getItem(this.email)
    if (sessionCode == null) {
      console.log(`invalid-email ${this.email} or code expired`)
    }

    if (userEnteredCode === sessionCode) {
      console.log('signup successful')
      sessionStorage.removeItem(this.email)
      this.accountCreated = true
    } else {
      // setTimeout(() => sessionStorage.removeItem(this.email), 5 * 60 * 1000)
      this.errorMsg = 'Code you entered is either invalid or expired.  Try again'
      this.showSignupForm = true // again (timeout and go back to
      if (ChatComponent.MaxSignupAttempts === this.signupAttempts) {
        this.errorMsg = 'Exceeded maximum signup attempts. Try again later'
        sessionStorage.removeItem(this.email)
        this.signupAttempts = 0
        this.showSignupForm = false
      }
      this.signupAttempts += 1
      // home page after few attempts
      // show failed account creation msg; retry - send email again
    }
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
    let code = '' + Math.floor(Math.random() * 10000)
    // local storage persistent. only want 'this browser tab' persistence.
    sessionStorage.setItem(this.email, code)

    axios.post('https://localhost:8888/signup', {
      email: this.email,
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

  handleLogout = () => {
    console.log('in logout() handler')
    this.loggedIn = false

    this.showLoginForm = false

    this.showEnterCodeForm = false
    this.showSignupForm = false
    this.accountCreated = false
  }

}
