/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   21 July 2019
; Description: TypeScript routes example about page.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="container">
  <div class="row">
    <h2>Welcome to the Hello Routes About Page!</h2>
  </div>
</div>
  `,
  styles: [ `
  .container {
    margin-top: 20px;
  }
  h2 {
    color: red;
  }
  `
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
