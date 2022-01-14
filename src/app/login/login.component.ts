import { AppComponent } from '../app.component'
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router'
import { isJSDocAugmentsTag } from 'typescript'
import AuthService, { AuthState, } from '../services/auth.service'
import { Subscriber } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  url: string = ''
  homeRoutePath = 'home'
  authServiceSubscriber: Subscriber<AuthState> | null = null
  localAuthState: AuthState;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.localAuthState = this.authService.getAuthState()
  }

  ngOnInit = (): void => {
  }

  getCurrentAuthState = () => {
    return this.authService.getAuthState()
  }

  onLogin = () => {
    let valid = false
    if ((this.localAuthState?.loginId === 'kundan') && (this.localAuthState?.password === 'kundan123')) {
      // a11y
      valid = true
    } else {
      valid = false
    }

    // a11y - do Ally stuff.. then take next actions.

    if (valid === true) {
      this.localAuthState!.isAuthenticated = true
      this.authService.setAuthState(Object.assign({}, this.localAuthState))
      this.router.navigateByUrl(this.authService.redirectUrl)
    } else {
      this.localAuthState!.isAuthenticated = false // asssert to make sure.
      // go nowhere.
      this.authService.setAuthState(Object.assign({}, this.localAuthState))
    }
  }
}