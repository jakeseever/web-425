/*
============================================
; Title:  home.component.ts
; Author: Jake Seever
; Date:   28 July 2019
; Description: Query Params example project.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>Welcome to the Home Page for the Query Parameters Example!</h2>
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
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
