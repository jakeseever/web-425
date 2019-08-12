/*
============================================
; Title:  home.component.ts
; Author: Jake Seever
; Date:   10 August 2019
; Description: md in action Angular Materials example
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['../app.component.css'],
  template: `
  <div class="parent" fxLayout="row">
  <div class="left" fxFlex></div>
  <div class="right fxFlex">
    <h2>Hello and Welcome to the Angular Material In Action Example!</h2>
  </div>
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
