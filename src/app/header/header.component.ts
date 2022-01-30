import { Component, OnInit } from '@angular/core';
import AuthService, { AuthState } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: AuthState = AuthService.defaultNoLoginAuthState
  constructor(
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authState = this.authService.getAuthState()
  }
}
