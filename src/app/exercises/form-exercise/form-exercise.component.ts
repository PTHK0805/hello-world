import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-exercise',
  templateUrl: './form-exercise.component.html',
  styleUrls: ['./form-exercise.component.css']
})
export class FormExerciseComponent implements OnInit {

  categories = [
    {id:1, name:'Development'},
    {id:2, name:'Art'},
    {id:3, name:'Language'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  submit(f:any) {
    console.log(f.value);
  }

  log(x: any) {
    console.log(x);
  }
}
