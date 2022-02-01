import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { BezierComponent } from './bezier/bezier.component'
import { CrosswordComponent } from './crossword/crossword.component'
import { DictionaryComponent } from './dictionary/dictionary.component'
import { HangmanComponent } from './hangman/hangman.component'
import { LandingComponent } from './landing/landing.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AuthGuard } from './services/auth.guard';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { InputParentComponent } from './input-parent/input-parent.component';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { ViewchildrenParentComponent } from './viewchildren-parent/viewchildren-parent.component';
import { RestComponent } from './rest/rest.component';
import { BehaviorComponent } from './behavior/behavior.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { LoginComponent } from './user-mgmt/login/login.component'

const routes: Routes = [
  {
    path: "", canActivate: [AuthGuard],
    children: [
      { path: AppComponent.homeRoutePath, component: LandingComponent },
      { path: 'bezier', component: BezierComponent, canActivate: [AuthGuard] },
      { path: 'crossword', component: CrosswordComponent },
      { path: 'dict', component: DictionaryComponent },
      { path: 'hangman', component: HangmanComponent },
      { path: 'testoutput', component: OutputParentComponent },
      { path: 'testinput', component: InputParentComponent },
      { path: 'viewchild', component: ViewchildParentComponent },
      { path: 'viewchildren', component: ViewchildrenParentComponent },
      { path: 'rest', component: RestComponent },
      { path: 'behavior', component: BehaviorComponent },
    ]
  },
  { path: 'usermgmt', component: UserMgmtComponent },
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: '', redirectTo: AppComponent.homeRoutePath, pathMatch: 'full'},
  { path: '**', component:  PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
