/*
============================================
; Title:  fruit.service.ts
; Author: Jake Seever
; Date:   03 August 2019
; Description: Form control Angular example fruit service file.
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from "./fruit";
import {Observable} from "rxjs";
import 'rxjs/add/observable/of';

@Injectable()
export class FruitService {

  // Fruit object array
  fruits: Fruit[] = [
    {id: 1, name: "Cherry", pricePerPound: "3.99", quantity: 5},
    {id: 2, name: "Strawberry", pricePerPound: "2.99", quantity: 3},
    {id: 3, name: "Orange", pricePerPound: ".99", quantity: 9},
    {id: 4, name: "Apple", pricePerPound: "1.99", quantity: 10},
    {id: 5, name: "Kiwi", pricePerPound: "1.49", quantity: 7}
  ];

  constructor() { }

  // Function to get fruits from array and return them.
  getFruits(): Observable<Fruit[]> {

    return Observable.of(this.fruits);

  }
}

