/*
============================================
; Title:  login.component.ts
; Author: Jake Seever
; Date:   28 July 2019
; Description: Router guards example application
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <h1 class="home">Please login here.</h1>
  `,
  styles: [`
    .home { background-color: yellow; }
    h1 { margin-top: 20px;}
  `]
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
