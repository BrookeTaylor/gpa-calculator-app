/*
============================================
; Title: Exercise 7.3 - Form Validation
; Author: Professor Krasso
; Date: 07/07/2023
; Modified By: Brooks
; Description: grade-summary component
============================================
*/

// Add an import statement for Input and add it to the @angular/core import
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-grade-summary',
    templateUrl: './grade-summary.component.html',
    styleUrls: ['./grade-summary.component.css'],
    standalone: false
})
export class GradeSummaryComponent implements OnInit {

  // Add two input values: grade of type string and course of type string
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
