import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss']
})
export class OutputChildComponent {

  @Output() messageEvent: EventEmitter<string> = new EventEmitter<string>()
  message: string = 'Child Data'

  onClick() {
    this.messageEvent.emit(this.message)
    console.log(`child: sent message to parent: ${this.message}`)
  }
}
