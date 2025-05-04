/*
============================================
; Title: Exercise 7.3 Form Validation
; Author: Professor Krasso
; Date: 07/07/2023
; Modified By: Brooks
; Description: signin module
============================================
*/

import { Component, OnInit } from '@angular/core';

// Import the SignInService, Router, FormBuilder, FormGroup, and CookieService
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';

// Add an import statement for Validators
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css'],
    standalone: false
})
export class SignInComponent implements OnInit {

  // Add a variable named form of type FormGroup
  signinForm: UntypedFormGroup;

  // Add a variable named errorMessage of type string
  errorMessage: string;

  // In the components constructor add references to the Router, CookieService, FormBuilder, and SignInService
  constructor(private router: Router, private cookieService: CookieService, private fb: UntypedFormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {

    // In the components ngOnInit function use the FormBuilder to create
    // a new FormGroup with one FormControl named studentId
    this.signinForm = this.fb.group({

      // Add Angulars built-in required Validator to the form.
      // Only allow numeric values and make the field required
      studentId: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$')
        ])
      ]
    });

  }

  // Add a new function named onSubmit()
  onSubmit() {

    // In the body of the onSubmit function, get the studentId value from
    // the studentId FormControl. captures.
    const formValues = this.signinForm.value;

    // holds value.
    const studentId = parseInt(formValues.studentId);

    // Next, create an if statement that compares the returned value from
    // the signinService.validate() function
    if (this.signinService.validate(studentId)) {

      // If true, add a cookie to the users browser and
      // use the Router to navigate them to the root path
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/'])

    } else {

      // Otherwise, assign an error message to the errorMessage variable
      this.errorMessage = 'This student ID you entered is invalid, please try again.';

    }
  }


/**
 * Add a get() function  named form that returns the signinForm controls
 *
 * We are creating this as a helper function to return the forms controls.
 *
 * This way we can apply client-side validation in a predictable way
 */
  get form() {
    return this.signinForm.controls;
  }


}
