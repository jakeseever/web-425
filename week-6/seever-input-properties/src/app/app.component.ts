/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   17 August 2019
; Description: Input Properties Angular Materials example
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Input Properties Example';

  stock: string;
  readonly numberOfShares = 100;

  onChangeEvent({ target }): void {
    this.stock = target.value;
  }
}
