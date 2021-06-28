import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  @Input() mean!: number | null
  @Input() median!: number | null
  @Input() stdDev!: number | null
}

