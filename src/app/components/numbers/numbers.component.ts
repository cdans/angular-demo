import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor() {
  }

  numbers: number[] = []
  mean: number | null = null
  median: number | null = null
  stdDev: number | null = null


  ngOnInit(): void {
    this.calcStats()
  }

  // I don't test class methods, because they don't have a return value and are handled like private internal methods
  addNumber() {
    const inputElement = <HTMLInputElement>document.getElementById("input");
    let num: number | null = parseFloat(inputElement.value)
    if (!isNaN(num)) {
      inputElement.value = ""
      this.numbers.push(num)
      this.calcStats()
    }
  }

  // I don't test class methods, because they don't have a return value and are handled like private internal methods
  calcStats() {
    if (this.numbers.length > 0) {
      this.mean = calcAvg(this.numbers)
      this.median = calcMedian(this.numbers)
      this.stdDev = calcStdDev(this.numbers)
    }
  }
}

export function calcAvg(numArray: number[]) {
  return numArray.reduce((a, b) => a + b) / numArray.length
}

export function calcMedian(numArray: number[]) {
  let len = numArray.length
  const numArrayTemp = numArray.concat()
  numArrayTemp.sort((a, b) => a - b)
  if (len % 2 == 0) {
    return (numArrayTemp[len / 2] + (numArrayTemp[(len / 2) - 1])) / 2
  } else {
    return numArrayTemp[(Math.floor(len / 2))]
  }
}

export function calcStdDev(numArray: number[]) {
  const n = numArray.length
  const avg = calcAvg(numArray)
  let stdDev = Math.sqrt(numArray.map(x => Math.pow(x - avg, 2)).reduce((a, b) => a + b) / n)
  if (stdDev != 0) {
    return stdDev
  } else {
    return 0
  }
}
