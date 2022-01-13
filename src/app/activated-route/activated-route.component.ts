import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-activated-route',
  templateUrl: './activated-route.component.html',
  styleUrls: ['./activated-route.component.scss']
})
export class ActivatedRouteComponent {
  constructor() { }
}
