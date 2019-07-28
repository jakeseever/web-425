/*
============================================
; Title:  user.component.ts
; Author: Jake Seever
; Date:   28 July 2019
; Description: Query Params example project.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <div class="container">
      <div class="row">
        <h2>Details for user: {{ userId }}</h2>
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
  `]
})

export class UserComponent implements OnInit {

  userId: string;
  constructor(route: ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
