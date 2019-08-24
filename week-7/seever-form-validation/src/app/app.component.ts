/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   23 August 2019
; Description: Form Validation Angular example
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seever-form-validation';

  onSubmit(formData) {
    console.log(formData);
    alert('You entered: ' + formData.telephone)
  }
}
