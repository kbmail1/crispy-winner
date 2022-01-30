import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  constructor() { }

  // Cantor: https://codepen.io/LiamKarlMitchell/pen/xnEca
  cantor = (row: number, col: number): number => {
    return ((row + col) * (row + col + 1)) / 2 + col;
  }

  reverseCantor = function (z: number): [number, number] {
    let pair: number[] = [];
    let t = Math.floor((-1 + Math.sqrt(1 + 8 * z)) / 2);
    let row = t * (t + 3) / 2 - z;
    let col = z - t * (t + 1) / 2;
    return [row, col]
  }
}

export default MathService
