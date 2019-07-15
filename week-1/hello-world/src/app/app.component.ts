/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   13 July 2019
; Description: hello-world application components
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Hello World!';
}
