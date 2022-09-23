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
    <p>{{title | summary:20}}</p>
  `,
})

export class CoursesComponent {
  title = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsa nam, optio inventore reiciendis voluptatibus velit aut eos sequi. Delectus nam, inventore dolores dolorem, eaque error animi minima libero obcaecati aliquid quia sapiente, quis magnam perferendis architecto fugit quas voluptate similique? Alias incidunt temporibus impedit, sit dignissimos nesciunt atque? Rem, non voluptatum! Placeat nisi itaque quisquam enim ipsa, iste necessitatibus maxime sunt voluptatibus at, perferendis aspernatur sequi aliquid. Ipsum quam repudiandae alias deleniti vel asperiores excepturi atque voluptatibus odit sed recusandae, quod quos vitae assumenda minima delectus ex tempora temporibus quaerat? Quaerat, optio maxime earum nesciunt assumenda quos tenetur. Ducimus.";
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    student: 30123,
    price: 190.95,
    releaseDate: new Date(2022,11,1)
  }
}