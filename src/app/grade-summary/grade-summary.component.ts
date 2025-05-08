/**
 * Title: Exercise 7.3 - Form Validation
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 7/7/23
 * Revision: 5/7/25
 * Description: Grade Summary Component
 */

// Add an import statement for Input and add it to the @angular/core import
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() remove = new EventEmitter<void>();

removeEntry() {
  this.remove.emit();
}

  constructor() { }

  ngOnInit(): void {
  }

}
