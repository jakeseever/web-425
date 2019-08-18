/*
============================================
; Title:  order.component.ts
; Author: Jake Seever
; Date:   17 August 2019
; Description: Input Properties Angular Materials example
;===========================================
*/


import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <span *ngIf="!!stockSymbol"><h4>Buying {{quantity}} shares of {{stockSymbol}}</h4></span>
  `,
  styles: [`
    h4 { width: 50%; background: cyan; text-align: center; padding: 5%; margin: auto; margin-top: 5%; }
  `]
})
export class OrderComponent implements OnInit {

  @Input() quantity: number;
  @Input() stockSymbol: string;

  constructor() { }

  ngOnInit() {
  }
}
