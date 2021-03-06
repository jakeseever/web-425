/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   03 August 2019
; Description: Form control Angular example
;===========================================
*/


import { Component } from '@angular/core';
import { debounceTime } from "rxjs/operators";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
      </ul>
    </nav>

    <br /><br />
    <div class="container col-sm-8">
      <div class="row">
        <div class="col">
          <h2>Handling Form Events using Observables</h2>
          <br />
          <div class="form-group">
            <label for="txtStockPrice">Stock Price: </label>
            <input type="text"
                   class="form-control"
                   id="txtStockPrice"
                   placeholder="Please enter the stock price..."
                   [formControl]="searchInput">
          </div>
        </div>
      </div>

      <br /><br />
      <div class="row">
        <div class="col" id="resultsMessage">
          <h4 class="txt-bold">Results: {{ convertedStockPrice }}</h4>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .txt-bold, label {
      font-weight: bold;
    }
    #resultsMessage {
      border: 1px solid green;
      background-color: lightgreen;
    }
    h2 {
      color: darkgreen;
    }
    .container {
      margin: auto;
    }

  `]
})
export class AppComponent {

  searchInput = new FormControl('');
  convertedStockPrice: string;

  constructor() {
    this.searchInput.valueChanges.pipe(debounceTime(500))
      .subscribe(stock => this.getStockQuoteFromServer(stock));
  }

  getStockQuoteFromServer(stock: string) {
    this.convertedStockPrice =
      `The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`;
  }
}

