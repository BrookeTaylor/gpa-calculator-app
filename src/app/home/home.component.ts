/*
============================================
; Title: Exercise 7.3 - Form Validation
; Author: Professor Krasso
; Date: 07/07/2023
; Modified By: Brooks
; Description: home component
============================================
*/

import { Component, OnInit } from '@angular/core';

// Add an import statement for the ITranscript interface
import { ITranscript } from '../transcript.interface';

// Add an import statement for FormGroup, FormBuilder, and Validators
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {


  // Add a variable named selectableGrades of type Array<string>
  // and assign it the following default values
  selectableGrades: Array<string> = [
    'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'
  ];


  // Add a variable name transcriptEntries of type Array<ITranscript>
  // and set it to an empty array
  transcriptEntries: Array<ITranscript> = [];

  // Add a new variable named gpaTotal of type number
  // and set the initial value to 0
  gpaTotal: number = 0;

  // Add a new variable named transcriptForm of type FormGroup
  transcriptForm: UntypedFormGroup;



  // Add the FormBuilder to the components constructor
  constructor(private fb: UntypedFormBuilder) { }





  ngOnInit(): void {

    // In the body of the ngOnInit function use the FormBuilder to build a
    // new FormGroup with two FormControls: course and grade
    this.transcriptForm = this.fb.group({
      course: [
        '',
        Validators.required
      ],
      grade: [
        '',
        Validators.required
      ]
    });

  }


  // Add a get() function named form that returns the transcriptForm controls
  get form() {
    return this.transcriptForm.controls;
  }




  // Rename the saveEntry() function to onSubmit()
  //and add a parameter called event
  onSubmit(event) {

    // In the body of the onSubmit(event) function push a new object literal
    // to the transcriptEntires array using the values captured from the from
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value
    });

      // Next, use the event object to reset Validation
      event.currentTarget.reset();

  }









  // Add a function called calculateResults()
  calculateResults() {

    // Add a local variable named gpa
    let gpa: number = 0;

    // Add a for loop and iterate over the transcriptEntries array
    for (let entry of this.transcriptEntries) {

      // In the body of the loop add a case statement that checks
      // the transcriptEntry.grade and assigns the appropriate value
      switch(entry.grade) {

        case 'A': gpa += 4.00; break;
        case 'A-': gpa += 3.70; break;
        case 'B+': gpa += 3.33; break;
        case 'B': gpa += 3.00; break;
        case 'B-': gpa += 2.70; break;
        case 'C+': gpa += 2.30; break;
        case 'C': gpa += 2.00; break;
        case 'C-': gpa += 1.70; break;
        case 'D+': gpa += 1.30; break;
        case 'D': gpa += 1.00; break;
        case 'D-': gpa += .70; break;
        case 'F': gpa += 0.00; break;

      }

    }





    // Outside the body of the for loop, divide the gpa against
    // the transcriptEntires array length  and assign the results
    // to the gpaTotal variable
    this.gpaTotal = gpa / this.transcriptEntries.length;

  }






  // Add a new function named clearEntries()
  clearEntries() {

    // In the body of the clearEntries function set the transcriptEntries variable
    // to an empty array and set the gpaTotal variable to 0
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }


}


