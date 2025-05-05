/**
 * Title: Exercise 7.3 - Form Validation
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 7/7/23
 * Revision: 5/4/25
 * Description: App Routing Module
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import our components
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Import the LoginComponent
import { SignInComponent } from './sign-in/sign-in.component';
// add an import statement for the SignInGuard
import { SignInGuard } from './sign-in.guard';

const routes: Routes = [

  // Add a parent path for the BaseLayoutComponet and one
  // child path for the HomeComponent
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }

// SignInGuard, add it to the parent BaseLayoutComponent
    ],
    canActivate: [SignInGuard]
  },

  // Add a parent path for AuthLayoutComponent and one
  // child path for the NotFoundComponent
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },

// Add a entry in the AuthLayoutComponents children array for the LoginComponent
      {
        path: 'sign-in',
        component: SignInComponent
      }
    ]
  },

  // Add another path for “catching all invalid URL requests”
  {
    path: '**',
    redirectTo: 'session/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
