import { CourseService } from './courses.service';
import { Component } from "@angular/core";
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'courses',
  template: `
    {{course.title | uppercase | lowercase}} <br/>
    {{course.rating | number:'1.2-2'}} <br/>
    {{course.student | number}} <br/>
    {{course.price | currency:'USD':true}} <br/>
    {{course.releaseDate | date:'shortDate'}} <br/>
  `,
})

export class CoursesComponent {
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    student: 30123,
    price: 190.95,
    releaseDate: new Date(2022,11,1)
  }
}