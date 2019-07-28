/*
============================================
; Title:  home.component.ts
; Author: Jake Seever
; Date:   28 July 2019
; Description: Router guards example application
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <h1 class="home">Welcome to the Guard Home Component!</h1>
  `,
  styles: [ `
    .home { background-color: steelblue; }
    h1 { margin-top: 20px; }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
