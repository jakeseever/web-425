/*
============================================
; Title:  home.component.ts
; Author: Jake Seever
; Date:   28 July 2019
; Description: Child Routes example application.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>
      Welcome to the Child Routes Example Home Page!
    </h2>
  `,
  styles: [ `
    .container {
      margin-top: 30px;
    }
    h2 {
      color: steelblue;
      margin-top: 30px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
