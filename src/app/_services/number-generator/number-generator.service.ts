import { Injectable } from '@angular/core';

@Injectable()
export class NumberGeneratorService {

  numberGrid: number[][];
  recordArray: number[];

  constructor() {
    this.initNumberGrid();
  }

  public generateNumberGrid(): number[][] {
    this.initNumberGrid();
    let num = 10;
    for (let i = 0; i < 9; i++) {
      this.resetRecordArray();
      for (let j = 0; j < 9; j++) {
        num = this.getRandomInt(1, 10);
        this.numberGrid[i][j] = num;
        if (this.recordArray.length === 0 && !this.isValid(this.numberGrid)) {
          console.log("here");
          j = 0;
        }
        // while (!this.isValid(this.numberGrid)) {
        //   num = this.getRandomInt(1, 10);
        //   this.numberGrid[i][j] = num;
        // }
      }
    }
    // console.log(this.recordArray);
    // for (let i = 0; i < 9; i++) {
    //   num = this.getRandomInt(1, 10);
    //   console.log(num);
    //   console.log(this.recordArray);
    // }
    return this.numberGrid;
  }

  initNumberGrid() {
    this.numberGrid = new Array(9);
    this.recordArray = new Array(9);
    for (let i = 0; i < 9; i++) {
      this.numberGrid[i] = new Array(9);
      this.recordArray[i] = i + 1;
    }
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.numberGrid[i][j] = -1;
      }
    }
  }

  resetRecordArray() {
    for (let i = 0; i < 9; i++) {
      this.recordArray[i] = i + 1;
    }
  }

  getRandomInt(min, max) {
    if (this.recordArray.length === 1) {
      const ret = this.recordArray[0];
      this.recordArray.pop();
      return ret;
    }
    let num = Math.floor(Math.random() * (max - min)) + min;
    while (this.recordArray.indexOf(num) === -1) {
      num = Math.floor(Math.random() * (max - min)) + min;
    }
    if (this.recordArray.indexOf(num) > -1) {
      const index = this.recordArray.indexOf(num);
      if (index === this.recordArray.length - 1) {
        this.recordArray.pop();
      }else {
        this.recordArray = this.recordArray.slice(0, index).concat(this.recordArray.slice(index + 1, this.recordArray.length));
      }
    }
    return num;
  }

  /**
   * Check if a given grid of numbers (9X9) is valid
   **/
  isValid(numberGrid: number[][]) {
    let list: number[] = [];
    // check the length of the grid
    if (numberGrid.length !== 9) {
      console.log(1);
      return false;
    }
    for (let i = 0; i < 9; i++) {
      if (numberGrid[i].length !== 9) {
        console.log(2, i);
        return false;
      }
    }
    // // check number values
    // for (let i = 0; i < 9; i++) {
    //   for (let j = 0; j < 9; j++) {
    //     if (numberGrid[i][j] < 1 || numberGrid[i][j] > 9) {
    //       console.log(3, i);
    //       return false;
    //     }
    //   }
    // }

    // check duplicated numbers in each row
    for (let i = 0; i < 9; i++) {
      if (this.checkDuplicatedNumber(numberGrid[i])) {
        console.log(4, i);
        return false;
      }
    }

    // check duplicated numbers in each column
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        list.push(numberGrid[j][i]);
      }
      if (this.checkDuplicatedNumber(list)) {
        console.log(5, i);
        return false;
      }
      list = [];
    }

    // check duplicated numbers in each 3x3 grid
    list = [];
    let row = 0;
    let col = 0;
    for (let i = 0; i < 9; i = i + 3) {
      for (let j = 0; j < 9; j = j + 3) {
        list = [];
        for (row = i; row < i + 3; row++) {
          for (col = j; col < j + 3; col++) {
            list.push(numberGrid[row][col]);
          }
        }
        if (this.checkDuplicatedNumber(list)) {
          console.log(6, i);
          return false;
        }
      }
    }

    return true;
  }
  /**
   * Check if a given array contains duplicated numbers
   * */
  checkDuplicatedNumber(numbers: number[]) {
    const sortedNum = numbers.slice().sort();
    for (let i = 0; i < numbers.length - 1; i++) {
      if (sortedNum[i] === sortedNum[i + 1] && sortedNum[i] !== -1) {
        return true;
      }
    }
    return false;
  }
}
