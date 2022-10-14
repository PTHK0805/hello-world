import { UsernameValidators } from './username.validator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.css']
})
export class SignUpFormComponent implements OnInit {

    form = new FormGroup({
        account: new FormGroup({
            username: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                UsernameValidators.cannotContainSpace,
            ], UsernameValidators.shouldBeUnique),
            password: new FormControl('', Validators.required)
        })
    });

    login() {
        this.form.setErrors({
            invalidLogin: true,
        })
        console.log(this.form.errors);
    }

    get username() {
        return this.form.get('account.username');
    }

    log(value: any) {
        console.log(value);
    }
    constructor() { }

    ngOnInit(): void {
    }

}
