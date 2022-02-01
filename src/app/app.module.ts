import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';

import AuthService from './services/auth.service';
import { OutputChildComponent } from './output-child/output-child.component';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { InputParentComponent } from './input-parent/input-parent.component';
import { InputChildComponent } from './input-child/input-child.component';
import { ViewchildChildComponent } from './viewchild-child/viewchild-child.component';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { ViewchildrenParentComponent } from './viewchildren-parent/viewchildren-parent.component';
import { ViewchildrenChildComponent } from './viewchildren-child/viewchildren-child.component';
import { RestComponent } from './rest/rest.component';
import { SendBehaviorComponent } from './send-behavior/send-behavior.component';
import { GetBehaviorComponent } from './get-behavior/get-behavior.component';
import { BehaviorComponent } from './behavior/behavior.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { SignupComponent } from './user-mgmt/signup/signup.component';
import { LoginComponent } from './user-mgmt/login/login.component';
import { httpInterceptorProviders } from './http-interceptors';
import { AuthHomeComponent } from './user-mgmt/auth-home/auth-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BezierComponent,
    CrosswordComponent,
    DictionaryComponent,
    HangmanComponent,
    PageNotFoundComponent,
    LandingComponent,
    OutputChildComponent,
    OutputParentComponent,
    InputParentComponent,
    InputChildComponent,
    ViewchildChildComponent,
    ViewchildParentComponent,
    ViewchildrenParentComponent,
    ViewchildrenChildComponent,
    RestComponent,
    SendBehaviorComponent,
    GetBehaviorComponent,
    BehaviorComponent,
    UserMgmtComponent,
    SignupComponent,
    LoginComponent,
    AuthHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
  ]
})
export class AppModule { }
