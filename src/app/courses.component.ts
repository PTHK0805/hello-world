import { CourseService } from './courses.service';
import { Component } from "@angular/core";
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'courses',
  template: `
    <h1>{{title}}</h1>
    
    <input [(ngModel)]="email" type="email" (keyup.enter)="onKeyUp()">
  `,
})

export class CoursesComponent {
  title = 'List of Courses';
 
  email = "example@gmail.com";

  onKeyUp() {
    console.log(this.email);
  }

  constructor(service: CourseService) {

  }
}