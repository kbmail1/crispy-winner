import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface LoginStatus {
  email: string,
  success: boolean
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() loginEmitter = new EventEmitter<LoginStatus>()

  loginStatus: any = null

  email: string = ''
  password: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(e: Event) {
    // TODO: validate with backend.
    let success = true
    let toEmit =
      this.loginEmitter.emit({
      email: this.email,
      success: true,
    })
  }

}
