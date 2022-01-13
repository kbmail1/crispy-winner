import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router'
import { isJSDocAugmentsTag } from 'typescript'
import AuthService, { AuthState } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authState: AuthState | null = null
  url: string = ''

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.authState = this.authService.getAuthState()
  }

  onLogin() {

    // NOTE: fields are already set throguh [(ngModel)] in html
    // encrypt password here. and explicitly change password field to null
    // Do the verification / JWT etc. and if all ok, then:
    if ((this.authState?.loginId === 'kundan') && (this.authState?.password === 'kundan123')) {
      this.authState!.isAuthenticated = true
      this.authService.setAuthState(Object.assign({}, this.authState))

      console.log(`login. 1.Success: authState: ${JSON.stringify(this.authState, null, 2)}`)
      console.log(`Login: 2.Success: redirecting back to: ${this.authService.redirectUrl}`)
      this.router.navigate([this.authService.redirectUrl])


    } else {
      this.authState!.isAuthenticated = false // asssert to make sure.
      this.authService.setAuthState(Object.assign({}, this.authState))
    }
  }

}
