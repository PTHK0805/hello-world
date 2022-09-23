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

    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>

    <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'green'">Save</button>
    
    <div (click)="onDivClick()">
      <button class="btn btn-primary" (click)="onClick($event)">Click</button>
    </div>

    <!--<input type="text" (keyup)="onKeyUp($event)">-->
    <!--<input type="text" (keyup.enter)="onKeyUp($event)">-->
    <input #email type="email" (keyup.enter)="onKeyUp(email.value)">
  `,
})

export class CoursesComponent {
  title = 'List of Courses';
  courses: any;
  colSpan = 2;
  imgUrl = "https://pixabay.com/get/ga467ea1c4ee536b6840f3350e8ee9b419bcf4d08cd44a58c67d6ff5087e3205abbc709563564f8fe02fb985632f69d8c72af3f02a9a001e00164185e78f81339_1920.jpg";
  isActive = false;

  onDivClick() {
    console.log('Div is Clicked')
  }

  onClick($event:MouseEvent) {
    $event.stopPropagation();
    console.log('Button Clicked', $event);
  }

  // Event Filtering

  //onKeyUp($event:any) {
  //  if ($event.keycode === 13) console.log('Enter is pressed');
  //}

  //onKeyUp($event:any) {
  //  console.log($event.target.value)
  //}

  onKeyUp(email:string) {
    console.log(email);
  }

  constructor(service: CourseService) {

    this.courses = service.getCourse();
  }
}