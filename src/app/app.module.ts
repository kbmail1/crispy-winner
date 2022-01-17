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
import { ActivatedRouteComponent } from './activated-route/activated-route.component';
import { LoginComponent } from './login/login.component';
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
import { BehaviorComponent } from './behavior/behavior.component';
import { RestComponent } from './rest/rest.component';

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
    LoginComponent,
    OutputChildComponent,
    OutputParentComponent,
    InputParentComponent,
    InputChildComponent,
    ViewchildChildComponent,
    ViewchildParentComponent,
    ViewchildrenParentComponent,
    ViewchildrenChildComponent,
    BehaviorComponent,
    RestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
  ]
})
export class AppModule { }
