/*
============================================
; Title: Exercise 7.3 - Form Validation
; Author: Professor Krasso
; Date: 07/07/2023
; Modified By: Brooks
; Description: Base-Layout component
============================================
*/

import { Component, OnInit } from '@angular/core';

// Add an import statement for the CookieService and Router
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {


  // Create a string variable named assignment
  assignment: string;


  // for the CookieService and Router, add them it to the components constructor
  constructor(private cookieService: CookieService, private router: Router) {

// Update the title variable to “GPA Calculator”
    this.assignment = 'GPA Calculator';
  }


  ngOnInit(): void {
  }


  // Add a new function named signOut()
  signOut() {

/**
 * In the body of the signOut function call the cookieService.deleteAll function
 * and then use the Router to navigate users to the sign-in page
 */
    this.cookieService.deleteAll();

    this.router.navigate(['/session/sign-in']);
  }


}
