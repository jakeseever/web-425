/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   21 July 2019
; Description: TypeScript routes example home page.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
  <div class="row">
    <h2>Welcome to the Hello Routes Home Page!</h2>
  </div>
</div>
  `,
  styles: [ `
  .container {
    margin-top: 20px;
  }
  h2 {
    color: darkorange;
  }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
