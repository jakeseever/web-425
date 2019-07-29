/*
============================================
; Title:  fruit.service.ts
; Author: Jake Seever
; Date:   29 July 2019
; Description: hello-di fruit example.
;===========================================
*/

import { Injectable } from '@angular/core';
import {Fruit} from "./fruit";

@Injectable()
export class FruitService {
  getFruit(): Fruit {
    return new Fruit(1, "Cherry", "Red");
  }
}
