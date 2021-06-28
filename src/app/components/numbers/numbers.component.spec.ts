import {ComponentFixture, TestBed} from '@angular/core/testing';

import {calcAvg, calcMedian, calcStdDev, NumbersComponent} from './numbers.component';

describe('NumbersComponent', () => {
  let component: NumbersComponent;
  let fixture: ComponentFixture<NumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumbersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CalcAverage', () => {
    let numArrayLenOne: number[] = [1]
    let numArrayUnsortedAndEven: number[] = [3, 6, 4, 8, 14, 1]
    let numArraySortedAndOdd: number[] = [4, 7, 9, 13, 18, 24, 45]
    it('should', function () {
      expect(calcAvg(numArrayLenOne)).toEqual(1)
    });
    it('should', function () {
      expect(calcAvg(numArrayUnsortedAndEven)).toEqual(6)
    });
    it('should', function () {
      expect(calcAvg(numArraySortedAndOdd)).toBeCloseTo(17.1428, 0.01)
    });
  }
)

describe('CalcMedian', () => {
    let numArrayLenOne: number[] = [1]
    let numArrayUnsortedAndEven: number[] = [3, 6, 4, 8, 14, 1]
    let numArraySortedAndOdd: number[] = [4, 7, 9, 13, 18, 24, 45]
    it('should', function () {
      expect(calcMedian(numArrayLenOne)).toEqual(1)
    });
    it('should', function () {
      expect(calcMedian(numArrayUnsortedAndEven)).toEqual(5)
    });
    it('should', function () {
      expect(calcMedian(numArraySortedAndOdd)).toEqual(13)
    });
  }
)

describe('CalcStdDev', () => {
    let numArraySame: number[] = [1,1,1,1]
    let numArrayUnsortedAndEven: number[] = [3, 6, 4, 8, 14, 1]
    let numArraySortedAndOdd: number[] = [4, 7, 9, 13, 18, 24, 45]
    it('should', function () {
      expect(calcStdDev(numArraySame)).toEqual(0)
    });
    it('should', function () {
      expect(calcStdDev(numArrayUnsortedAndEven)).toBeCloseTo(4.2031, 0.01)
    });
    it('should', function () {
      expect(calcStdDev(numArraySortedAndOdd)).toBeCloseTo(12.9992, 0.01)
    });
  }
)
