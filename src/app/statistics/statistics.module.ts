import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { ResumeDataComponent } from './resume-data/resume-data.component';
import { GenderComponent } from './gender/gender.component';
import { GeneralResultsComponent } from './general-results/general-results.component';


@NgModule({
  declarations: [
    StatisticsPageComponent,
    ResumeDataComponent,
    GenderComponent,
    GeneralResultsComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
  ],
  exports: [
    GenderComponent,
    GeneralResultsComponent
  ]
})
export class StatisticsModule { }
