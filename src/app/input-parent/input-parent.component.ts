import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-parent',
  templateUrl: './input-parent.component.html',
  styleUrls: ['./input-parent.component.scss']
})
export class InputParentComponent {

  counter: number = 0
  message: string = 'msg toc child'
  sendMsgToChild() {
    this.message = this.message + String(this.counter)
    this.counter += 1
  }
}
