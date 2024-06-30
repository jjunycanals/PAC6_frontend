import { Injectable } from '@angular/core';
import { Papa, ParseResult } from 'ngx-papaparse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface StudentDTO {
  id: number;
  name: string;
  surname: string;
  gender: string;
  score: number;
  absences: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private papa: Papa, private http: HttpClient) {}

  getStudents(): Observable<StudentDTO[]> {
    return this.http.get('../../assets/students.csv', { responseType: 'text' })
      .pipe(
        map(csvData => {
          const results:ParseResult<any> = this.papa.parse(csvData, {
            header: true,
            skipEmptyLines: true
          }).data;
          const parsedData = results.data;
          return parsedData.map((student:any) => ({
            id: +student.ID_Alumno,
            name: student.Nombre,
            surname: student.Apellidos,
            gender: student.Sexo,
            score: +student.Nota_Final,
            absences: +student.Faltas_Asistencia
          }));
        })
      );
  }
  // parseCSV(data: string) {
  //   return new Promise((resolve, reject) => {
  //     this.papa.parse(data, {
  //       complete: (result) => {
  //         resolve(result);
  //       },
  //       error: (error) => {
  //         reject(error);
  //       }
  //     });
  //   });
  // }
}
