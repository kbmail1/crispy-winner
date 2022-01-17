import { Component, Inject, OnInit } from '@angular/core';
import MathService from '../services/math.service';

@Component({
  selector: 'app-crossword',
  templateUrl: './crossword.component.html',
  styleUrls: ['./crossword.component.scss']
})
export class CrosswordComponent implements OnInit {

  public static readonly DefaultSize: number = 3
  size: number = CrosswordComponent.DefaultSize
  // key is x.y (float) and value is cantor
  xyToCantor: { [key: string]: number } = {}

  constructor(
    @Inject(MathService) public math: MathService) {

    console.log(`size: ${this.size}`)
      for (let x = 0; x < this.size; x++) {
    for (let y = 0; y < this.size; y++) {
        console.log(`x, y: ${x}, ${y}`)
        const xy: string = '' + x + '.' + y
        this.xyToCantor[xy] = math.cantor(x, y)
      }
    }

    for (const k in this.xyToCantor) {
      console.log(`key: ${k} - ${this.xyToCantor[k]}`)
    }
  }


  ngOnInit(): void { }
}
