import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-general-results',
  templateUrl: './general-results.component.html',
  styleUrl: './general-results.component.scss'
})
export class GeneralResultsComponent {

  public resultsChartData: ChartData<'bar'> = {
    labels: ['Aprovats', 'Suspessos'],
    datasets: [{
      data: [60, 40],
      backgroundColor: ['#4CAF50', '#F44336']
    }]
  };

  public resultsChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {},
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
