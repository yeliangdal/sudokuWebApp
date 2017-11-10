import { Component, OnInit } from '@angular/core';
import {NumberGeneratorService} from '../_services/number-generator/number-generator.service';

@Component({
  selector: 'app-playing-surface',
  templateUrl: './playing-surface.component.html',
  styleUrls: ['./playing-surface.component.css']
})
export class PlayingSurfaceComponent implements OnInit {

  numbersInGrid: number[][];
  constructor(private numberGeneratorService: NumberGeneratorService) { }

  ngOnInit() {
    // this.numbersInGrid = testdata;

    this.numbersInGrid = this.numberGeneratorService.generateNumberGrid();
    // console.log(this.numbersInGrid );
  }

}

const testdata = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

const testdata1 = [
  [8, 3, 5, 4, 1, 6, 9, 2, 7],
  [2, 9, 6, 8, 5, 7, 4, 3, 1],
  [4, 1, 7, 2, 9, 3, 6, 5, 8],
  [5, 6, 9, 1, 3, 4, 7, 8, 2],
  [1, 2, 3, 6, 7, 8, 5, 4, 9],
  [7, 4, 8, 5, 2, 9, 1, 6, 3],
  [6, 5, 2, 7, 8, 1, 3, 9, 4],
  [9, 8, 1, 3, 4, 5, 2, 7, 6],
  [3, 7, 4, 9, 6, 2, 8, 1, 5]
];
