/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   28 July 2019
; Description: Query Params example project.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seever-query-params';
  userId = 1098;
}
