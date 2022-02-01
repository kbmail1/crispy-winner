import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import AuthService, { AuthState } from './auth.service'
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    routerSnapshot: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const url = routerSnapshot.url
    console.log(`In auth.guard: canActivate: snapshot url: ${url}`)
    // store it so we can redirect back, on successful login
    this.authService.redirectUrl = url

    return this.checkLogin(url)
  }

  private checkLogin(url: string): boolean {

    if (this.authService.getAuthState().isAuthenticated) {
      console.log('auth-guarding - User is logged in.')
      return true; // to login page.
    }
    console.log('auth-guarding - NOT Logged in: Redirecting to login')
    this.router.navigate(['/usermgmt'])
    return false
  }
}