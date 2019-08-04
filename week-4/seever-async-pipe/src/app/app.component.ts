/*
============================================
; Title:  app.component.ts
; Author: Jake Seever
; Date:   03 August 2019
; Description: Form control Angular example app component file.
;===========================================
*/

// Import Statements
import { Component } from '@angular/core';
import {Fruit} from "./fruit";
import {Observable} from "rxjs";
import {FruitService} from "./fruit.service";


@Component({
  selector: 'app-root',

  // Create a navigation section and table of fruits.
  template: `
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul class="navbar-nav">
      <li class="nav-item active"><a href="#" class="nav-link">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
    </ul>
  </nav>

<br /><br />
  <div class="container">
    <div class="row">
      <h2>Fruit Details</h2>
      <table class="table table-hover table-striped">
        <thead class="tbl-header thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let fruit of fruits | async">
            <td>{{ fruit.id }}</td>
            <td>{{ fruit.name }}</td>
            <td>$ {{ fruit.pricePerPound }}</td>
            <td>{{ fruit.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  fruits: Observable<Fruit[]>;
  title = 'seever-async-pipe';

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}
