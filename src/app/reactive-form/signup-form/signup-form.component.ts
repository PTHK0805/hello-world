import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

}
