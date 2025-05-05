/**
 * Title: Exercise 7.3 - Form Validation
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 7/7/23
 * Revision: 5/4/25
 * Description: Sign-In Guard
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Add import statements for Router and CookieService
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class SignInGuard  {

  // for Router and CookieService and add them to the classes constructor
  constructor(private router: Router, private cookieService: CookieService) {



  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

/**
 * In the body of the canActivate function add a variable named sessionUser
 * and assign it the response from the cookieService.get(‘session_user’) call
 */
      const sessionUser = this.cookieService.get('session_user');


// Next, add an if statement to check the value, if true, return true.
      if (sessionUser) {

        return true;

      } else {

        // If false, use the router to redirect users back to the sign-in page
        this.router.navigate(['/session/sign-in']);
        return false;

      }

  }

}
