/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   14 July 2019
; Description: Application component file.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Hello from the AppComponent';
}
