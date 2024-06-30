import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { StudentService } from './home/student.service';
import { HomeModule } from './home/home.module';
import { ListModule } from './list/list.module';
import { StatisticsModule } from './statistics/statistics.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    ListModule,
    StatisticsModule

  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

