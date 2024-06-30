import { Component, OnInit } from '@angular/core';
import { StudentDTO, StudentService } from '../student.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  students: StudentDTO[] = [];
  loading: boolean = true;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
      this.loading = false;
    });
  }
}
