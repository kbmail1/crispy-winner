import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildChildComponent } from '../viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './viewchild-parent.component.html',
  styleUrls: ['./viewchild-parent.component.scss']
})
export class ViewchildParentComponent {

  @ViewChild(ViewchildChildComponent) child!: ViewchildChildComponent

  ngAfterViewInit() {
    console.log(`Invoking child method`)
    console.log(this.child.whoAmI())
    console.log(`Yay! see above.  it is output from child method whoAmI`)
  }
}
