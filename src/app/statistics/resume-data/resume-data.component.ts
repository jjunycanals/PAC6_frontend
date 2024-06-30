import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../home/student.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-resume-data',
  templateUrl: './resume-data.component.html',
  styleUrl: './resume-data.component.scss'
})
export class ResumeDataComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      const total = data.length;
      const approved = data.filter(student => student.score >= 5).length;
      const failed = total - approved;

      new Chart('resumeDataChart', {
        type: 'doughnut',
        data: {
          labels: ['Aprovats', 'Suspès'],
          datasets: [{
            data: [approved, failed],
            backgroundColor: ['#36A2EB', '#FF6384'],
          }]
        }
      });
    });
  }
}
