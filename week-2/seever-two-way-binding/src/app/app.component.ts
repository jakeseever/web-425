/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   21 July 2019
; Description: TypeScript two-way-binding example.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <br /><br /><br />

  <div class="container-fluid two-way-form">
    <h2>Two-Way Binding Example</h2><br />
    <div class="form-group">
      <input class="form-control" type="text"
          placeholder="Enter your name ..."
          [(ngModel)]="name">

      <button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
    </div>

    <div class="form-group">
      <p class="alert-success">Welcome to my first Angular two-way binding example, {{name}}! </p>
    </div>


  </div>
`,
styles: [
  `
    .two-way-form {
      width: 50%;
      margin: auto;
    }

    .form-group p {
      text-align: center;
    }
  `
]
})
export class AppComponent {
  name: string;
}
