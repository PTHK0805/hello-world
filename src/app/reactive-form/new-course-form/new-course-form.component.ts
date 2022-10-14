import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  constructor(private fb: FormBuilder){}

  //form = new FormGroup({
  //  topics: new FormArray([])
  //})

  form = this.fb.group({
    topics: this.fb.array([])
  })

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topicIndex: any) {
    this.topics.removeAt(topicIndex);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  get getControls() {
    return this.topics.controls;
  }

}
