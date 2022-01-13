import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BezierComponent } from './bezier/bezier.component';
import { CrosswordComponent } from './crossword/crossword.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { HangmanComponent } from './hangman/hangman.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingComponent } from './landing/landing.component';
import { ActivatedRouteComponent } from './activated-route/activated-route.component';
import { LoginComponent } from './login/login.component';

import AuthService from './services/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    BezierComponent,
    CrosswordComponent,
    DictionaryComponent,
    HangmanComponent,
    PageNotFoundComponent,
    LandingComponent,
    ActivatedRouteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
