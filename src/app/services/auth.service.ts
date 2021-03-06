import { identifierName } from '@angular/compiler';
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

export const defaultNoLoginAuthState: AuthState = {
    isAuthenticated: false,
    loginId: '',
    password: ''
  }
@Injectable({
  providedIn: 'root'
})
class AuthService {

  constructor() { }

  // maybe private with get/set for other (log, etc housekeeping)?
  redirectUrl : string = ''

  static readonly dfltIsAuthenticated = false
  static readonly dfltLoginId = ''
  static readonly dfltPassword = ''

  public authState: AuthState = defaultNoLoginAuthState

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
