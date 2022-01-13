import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { BezierComponent } from './bezier/bezier.component'
import { CrosswordComponent } from './crossword/crossword.component'
import { DictionaryComponent } from './dictionary/dictionary.component'
import { HangmanComponent } from './hangman/hangman.component'
import { LandingComponent } from './landing/landing.component'
import { ActivatedRouteComponent } from './activated-route/activated-route.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'bezier', component: BezierComponent },
  { path: 'crossword', component: CrosswordComponent },
  { path: 'dict', component: DictionaryComponent },
  { path: 'hangman', component: HangmanComponent },
  { path: 'activated', component: ActivatedRouteComponent },
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: '**', component:  PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
