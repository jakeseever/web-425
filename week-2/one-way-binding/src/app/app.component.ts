/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   21 July 2019
; Description: TypeScript One-way binding example.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <button (click)="changeName()">Change Name</button>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `
  ]
})

export class AppComponent {
  title = 'one-way-binding';

  // Class property with name
  name:string = "Jake Seever";

  // Change the name function
  changeName() {
    this.name = "Jacob W. Seever";
  }
}
