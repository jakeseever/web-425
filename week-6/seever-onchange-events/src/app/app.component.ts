/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   17 August 2019
; Description: Onchange Events Angular example
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'seever-onchange-events';
  myGreeting = 'Hello';
  myUser: { name: string } = { name: 'Jake' }

}
