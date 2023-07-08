# GPA Calculator App

Title: Exercise 6.3 - Layouts  
Author: Professor Krasso  
Date: 06/30/2023  
Description: GPA Calculator App Setup.   

---

* Generate a new Angular application and name it `gpa-calculator-app1`

      ng new gpa-calculator-app1

  > Accept "Y" for routing


* Install the following npm packages: 

      ng add @angular/material

  > Select the "Deep Purple/Amber theme"  
  > Yes to Angular Material typography styles  
  > Yes to browser animations  

      npm install @angular/flex-layout
  
* Generate the following components: auth-layout, base-layout, not-found, and home

      ng g c auth-layout
      ng g c base-layout
      ng g c not-found
      ng g c home

---

Title: Exercise 6.4 - Input Properties  
Author: Professor Krasso  
Date: 07/01/2023  
Description: GPA Calculator App Setup.  

---

* Make a copy of the `gpa-calcualtor-app1` from Exercise 6.3 and add it to your week-6 directory 

* Rename the application to `gpa-calculator-app2`

* Delete the `node_modules` directory 

* Delete the `package-lock.json` file

* Open the `angular.json` file and find and replace all “gpa-calculator-app1” entries with “gpa-calculator-app2” 

* Open the `package.json` file and change the name to “gpa-calculator-app2” 

* Run npm install and ng serve 

        npm i 

        npm audit fix

        ng serve

* Generate two new components: gpa and grade-summary

        ng g c gpa

        ng g c grade-summary

* Add a new file to the app directory and name it `transcript.interface.ts`

---

Title: Exercise 7.2 - Reactive Forms  
Author: Professor Krasso  
Date: 07/04/2023  
Description: GPA Calculator App Setup.  

---

* Make a copy of the `gpa-calcualtor-app2` from Assignment 6.4 and add it to your week-7 directory 

* Rename the application to `gpa-calculator-app3`

* Delete the `node_modules` directory 

* Delete the `package-lock.json` file

* Open the `angular.json` file and find and replace all “gpa-calculator-app2” entries with “gpa-calculator-app3” 

* Open the `package.json` file and change the name to “gpa-calculator-app3” 

* Install ngx-cookie-service 

        npm i ngx-cookie-service

* Generate a new guard and name it sign-in

        ng g g sign-in

  > Select 'CanActivate'

* Generate a new service and name it sign-in

        ng g s sign-in

* Generate a new component and name it sign-in

        ng g c sign-in

---

Title: Exercise 7.3 - Form Validation
Author: Professor Krasso  
Date: 07/07/2023  
Description: GPA Calculator App Setup. 

---

* Make a copy of the `gpa-calcualtor-app3` from Assignment 7.2 and add it to your week-7 directory 

* Rename the application to `gpa-calculator-app`

* Delete the `node_modules` directory 

* Delete the `package-lock.json` file

* Open the `angular.json` file and find and replace all “gpa-calculator-app3” entries with “gpa-calculator-app” 

* Open the `package.json` file and change the name to “gpa-calculator-app” 

* Run npm install and ng serve 

        npm i 

        npm audit fix

        ng serve

---

* Deploy the application to GitHub pages 

        ng add angular-cli-ghpages 
