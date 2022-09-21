import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
  `
})

export class CoursesComponent {
  title = 'List of Courses'
  courses = ['course1', 'course2', 'course3']

  getTitle() {
    return this.title;
  }
}