/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   21 July 2019
; Description: TypeScript routes example contact page.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <div class="container">
  <div class="row">
    <h2>Welcome to the Hello Routes Contact Page!</h2>
  </div>
</div>
  `,
  styles: [ `
  .container {
    margin-top: 20px;
  }
  h2 {
    color: steelblue;
  }
  `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
