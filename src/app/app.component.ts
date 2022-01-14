import { Component, DoCheck, OnInit, } from '@angular/core';
import './app.component.scss'
import AuthService, { AuthState, } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crispy-winner';
  // render Login or Logout based on this:
  public static homeRoutePath: string = 'home'

  constructor(
    private authService: AuthService
  ) {}
}