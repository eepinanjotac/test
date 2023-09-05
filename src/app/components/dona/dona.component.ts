import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title : string = 'Sin titulo';



// Gráfica Dona 
public doughnutChartLabels: string[] = [ 'Data 1', 'Data 2', 'Data 3' ];

@Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 100, 300, 200 ] }
    ]
  }; 
  public doughnutChartType: ChartType = 'doughnut';
// ...Gráfica Dona 
}
