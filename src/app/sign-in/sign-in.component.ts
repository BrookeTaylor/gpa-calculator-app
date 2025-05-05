/**
 * Title: Exercise 7.3 - Form Validation
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 7/7/23
 * Revision: 5/4/25
 * Description: Sign In Component
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signinForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cookieService: CookieService,
    private signinService: SignInService
  ) {
    this.signinForm = this.fb.group({
      studentId: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ]
    });
  }

  onSubmit(): void {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId, 10);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'The student ID you entered is invalid, please try again.';
    }
  }

  get form() {
    return this.signinForm.controls;
  }
}
