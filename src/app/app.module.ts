/*
============================================
; Title: Exercise 7.3 - Form Validation
; Author: Professor Krasso
; Date: 07/07/2023
; Modified By: Brooks
; Description: app module
============================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

// Import MatToolbarModule, FlexLayoutModule, MatCardModule, and MatButtonModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { GpaComponent } from './gpa/gpa.component';
import { GradeSummaryComponent } from './grade-summary/grade-summary.component';

// Add import statements for MatFormFieldModule, MatInputModule, MatListModule,
// FormsModule, and MatSelectModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SignInComponent } from './sign-in/sign-in.component';

import { CookieService } from 'ngx-cookie-service';
// Add an import statement for the ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    BaseLayoutComponent,
    NotFoundComponent,
    HomeComponent,
    GpaComponent,
    GradeSummaryComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Add the imported components to the imports array
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    // Add the imported modules to the imports array
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatSelectModule,
    // import ReactiveForms
    ReactiveFormsModule

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
