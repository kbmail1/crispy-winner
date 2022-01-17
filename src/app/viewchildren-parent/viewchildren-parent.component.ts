import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ViewchildrenChildComponent } from '../viewchildren-child/viewchildren-child.component';

@Component({
  selector: 'app-viewchildren-parent',
  templateUrl: './viewchildren-parent.component.html',
  styleUrls: ['./viewchildren-parent.component.scss']
})
export class ViewchildrenParentComponent implements AfterViewInit {

  @ViewChildren(ViewchildrenChildComponent) children!: QueryList<ViewchildrenChildComponent>

  ngAfterViewInit() {
    console.log(`parent of view children`)
    this.children.forEach((child, ind) => { console.log(`${child.getPing(ind)}`) })
  }
}
