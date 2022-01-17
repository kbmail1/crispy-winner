import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.scss']
})
export class OutputParentComponent {

  message: string = ''

  displayMessage(event: any) {
    this.message = event
    console.log(`parent: received msg from child: ${event}`)
  }
}
