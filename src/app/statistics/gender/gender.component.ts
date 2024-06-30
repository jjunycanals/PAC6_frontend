import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.scss'
})
export class GenderComponent {
  public genderChartData: ChartData<'pie'> = {
    labels: ['Masculí', 'Femení'],
    datasets: [{
      data: [50, 50],
      backgroundColor: ['#36A2EB', '#FF6384']
    }]
  };

  public genderChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: true,
      },
    }
  };

  constructor() { }

  ngOnInit(): void { }
}
