/*
============================================
; Title:  child.component.ts
; Author: Jake Seever
; Date:   17 August 2019
; Description: Onchange Events Angular example
;===========================================
*/

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="child">
      <h2>Child</h2>
      <div class="label">Greeting: {{ greeting }}</div>
      <div class="label">User Name: {{ user.name }}</div>
    </div>
  `,
  styles: [`
    .child {
      background: green;
    }
    .label {
      margin-top: 3%;
    }
  `]
})

export class ChildComponent implements OnChanges {

  @Input() greeting: string;
  @Input() user: { name: string };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(JSON.stringify(changes, null, 2));

  }
}
