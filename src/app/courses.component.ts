import { CourseService } from './courses.service';
import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <h1>{{title}}</h1>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
    <!-- Property Binding -->
    <img [src]="imgUrl"/>
    <!--<img src="{{imgUrl}}"/>-->
  `
})

export class CoursesComponent {
  title = 'List of Courses';
  courses: any;
  imgUrl = "https://pixabay.com/get/ga467ea1c4ee536b6840f3350e8ee9b419bcf4d08cd44a58c67d6ff5087e3205abbc709563564f8fe02fb985632f69d8c72af3f02a9a001e00164185e78f81339_1920.jpg";

  constructor(service: CourseService) {
   
    this.courses = service.getCourse();
  }
}