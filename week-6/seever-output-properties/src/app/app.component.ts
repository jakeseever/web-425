/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   17 August 2019
; Description: Output Properties Angular example
;===========================================
*/

import { Component } from '@angular/core';
import { PriceQuote } from "./price-quote/iprice.quote";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'seever-output-properties';

  priceQuote: PriceQuote;

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
}
