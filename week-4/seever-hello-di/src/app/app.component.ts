/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   29 July 2019
; Description: hello-di dependency injection fruit example.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seever-hello-di';
}
