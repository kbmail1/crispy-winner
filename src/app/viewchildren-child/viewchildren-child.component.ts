import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchildren-child',
  templateUrl: './viewchildren-child.component.html',
  styleUrls: ['./viewchildren-child.component.scss']
})
export class ViewchildrenChildComponent {
  getPing(n: number): string {
    return `I am child: ${n}`
  }
}