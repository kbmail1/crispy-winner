import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UserService } from '../user-service/user-service'
import { HttpClient } from '@angular/common/http';
import { bcrypt } from 'bcrypt'

/*
 * Output status (true or false) or signup success
 * signup form, enter-code form, sending email => 1 signup attemp.
 * Once invoked, this component is responsible to do one attempt and
 *   return that success or failure to the parent.
 * Max retries, delay between reattempts is outside the scope
 */

export interface SignupStatus {
  email: string,
  success: boolean,
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  @Output() signupEmitter = new EventEmitter()
  signupStatus: any = null

  getEmail: boolean = false
  getCode: boolean = false
  email: string = ''
  enc_password: string = ''

  @ViewChild('signUploce') codeInputField: any

  constructor(
    private userService: UserService,
    private httpClient: HttpClient,
  ) {
    this.getEmail = true
    this.getCode = false

  }

  handleCode = () => {
    // TODO: Vaidate
    // user entered code is in code (through ngModel)
    // let code = this.codeInputField.nativeElement.value
    let code = (document.getElementById('signup-code') as HTMLInputElement)!.value
    console.log(`user entered code: ${code}`)
    let sessionCode = sessionStorage.getItem(this.email)


    let success = true
    if (sessionCode === null || sessionCode !== code) {
      success = false
      console.log(`user entered: ${code}.  In session: ${sessionStorage.getItem(this.email)}`)
    }

    console.log(`this.success ${ success }`)
    this.signupEmitter.emit({
      email: this.email,
      success,
    })

  }

  // 4 digit code.
  handleRequestedCreds = () => {
    sessionStorage.removeItem(this.email)
    console.log('handleEmail: cleared session')


    let code = this.userService.generateEmailCode()
    sessionStorage.setItem(this.email, code)

    const response$ = this.httpClient.post<any[]>(
      'https://localhost:8888/signup', {
      email: this.email,
      code,
    })
    response$.subscribe({
      next: v => {
        this.getEmail = false;
        this.getCode = true;
      },
      error: (err) => { console.error('handleEmail: response error: ', err) },
      complete: () => { console.info('handleEmail: completed response handling') },
    })
  }

  getSession = () => {
    return sessionStorage.getItem(this.email)
  }
}
