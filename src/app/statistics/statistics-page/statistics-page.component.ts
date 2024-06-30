import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.scss'
})
export class StatisticsPageComponent implements OnInit {
  loadResumeData: boolean = false;
  loadGenderData: boolean = false;
  loadGeneralResults: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
}
