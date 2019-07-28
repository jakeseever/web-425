/*
============================================
; Title:  e404.component.ts
; Author: Jake Seever
; Date:   28 July 2019
; Description: Query Params example project.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>The Requested Page Was Not Found!</h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    h2 {
      color: red;
    }
  `]
})

export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
