/**
 * Title: Exercise 7.3 - Form Validation
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 7/7/23
 * Revision: 5/4/25
 * Description: Sign-In Service
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  // Add a variable named studentIds of type Array<number>
  studentIds: Array<number>;

  constructor() {

    // In the services constructor populate the array with the following
    // values: 1007, 1008, 1009, 1010, 1011, 1012
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];

  }

  // Add a function named validate(studentId: number)
  validate(studentId: number) {

// In the body of the validate function iterate over the studentIds array
// and return true if you find a match.  If there are no matches return false.
    return this.studentIds.some(id => id === studentId);

  }


}
