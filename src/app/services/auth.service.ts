import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface AuthState {
  isAuthenticated: boolean
  loginId: string | null
  password: string | null
  // add AA related details...
}

@Injectable({
  providedIn: 'root'
})
class AuthService {

  constructor() { }

  // maybe private with get/set for other (log, etc housekeeping)?
  public redirectUrl : string = ''

  authState: AuthState = {
    isAuthenticated: false,
    // === these should not be null.
    // used in template expressions which do not accept nulls.
    // asserting '!' will compile, and runtime error when found these nulls.
    loginId: '',
    password: '',
  }

  private authSubject = new BehaviorSubject<AuthState>(this.authState)
  public authObservable  = this.authSubject.asObservable()

  public setAuthState(authState: AuthState): void {
    this.authSubject.next({
      loginId: authState.loginId,
      password: authState.password,
      isAuthenticated: authState.isAuthenticated,
    })
  }

  public getAuthState(): AuthState {
    return this.authSubject!.value
  }
}

export default AuthService
