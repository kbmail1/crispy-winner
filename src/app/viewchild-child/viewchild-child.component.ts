import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild-child',
  templateUrl: './viewchild-child.component.html',
  styleUrls: ['./viewchild-child.component.scss']
})
export class ViewchildChildComponent {

  shouldShow: boolean = true

  whoAmI() {
    return 'I am ViewchildChildComponent'
  }
}