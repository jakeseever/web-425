/*
============================================
; Title:  price-quote.component.ts
; Author: Jake Seever
; Date:   17 August 2019
; Description: Output Properties Angular example
;===========================================
*/

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PriceQuote} from "./iprice.quote";
import {interval} from "rxjs/index";


@Component({
  selector: 'app-price-quote',
  template: `
   <strong>
     Inside PriceQuoteComponent
     {{ priceQuote?.stockSymbol }}
     {{ priceQuote?.lastPrice | currency: 'USD' }}
   </strong>
  `,
  styles: [`
    :host { background-color: lightgreen; margin-left: 37%; margin-top: 25px;}
  `]
})

export class PriceQuoteComponent implements OnInit {

  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote: PriceQuote;

  constructor() {
    interval(2000)
      .subscribe(data => {
        this.priceQuote = {
          stockSymbol: 'IBM',
          lastPrice: 100 * Math.random()
        };

        this.lastPrice.emit(this.priceQuote);
      });
  }
  ngOnInit() {
  }
}
