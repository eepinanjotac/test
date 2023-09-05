import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent {

// Gráfica Ventas
  public labels1 : string[] = [ 'Prueba', 'In-Store Sales', 'Mail-Order Sales' ];
  public data2: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 100, 100, 100 ] }
    ]
  }; 

  public labels2 : string[] = [ 'Prueba 2', 'Prueba 2', 'Prueba 2' ];
  public data3: ChartData<'doughnut'> = {
    labels: this.labels2,
    datasets: [
      { data: [ 250, 190, 400 ] }
    ]
  }; 



  // Gráfica barras
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Deudas' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Pagos' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
  // .....Gráfica barras

}