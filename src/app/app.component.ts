import { Component } from '@angular/core';
import { ISchool, ICourses, ISchools } from './model/school';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements ISchools {
  title = 'les';
  public school: ISchool;

  constructor() {

    const school: ISchool = {
      name: 'Hillel',
      executive: 'Misha',
      courses: [
          {
              id: 10,
              courseName: 'Javascript basic',
              price: 5400
          },
          {
              id: 12,
              courseName: 'Javascript Pro',
              price: 6400
          },
          {
              id: 2,
              courseName: 'Python',
              price: 6400
          },
          {
              id: 54,
              courseName: 'Php',
              price: 5400
          }
      ]
    };

    function minId(): ICourses {
      let min: number;
      let newObj: ICourses;

      school.courses.forEach((item: ICourses, index: number): void => {
        if (index === 0) {
          min = item.id;
        } else if (min > item.id) {
          min = item.id;
          newObj = item;
        }
      });

      return newObj;
    }

    minId();

    function toNumber(numb: number | string): number {
      let factorial: number;

      if (typeof numb === 'string') {
        numb = parseInt(numb, 10);
      }

      for (let n = 1; n < numb + 1; n++ ) {
        if (n === 1) {
          factorial = n;
        } else {
          factorial *= n;
        }
      }
      return factorial;
    }

    toNumber(6);
  }

  getSchoolName(): string {
    return this.school.name;
  }

  getExecutive(): string {
    return this.school.executive;
  }
}
