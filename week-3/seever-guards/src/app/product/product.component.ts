/*
============================================
; Title: product.component.ts
; Author: Jake Seever
; Date:   28 July 2019
; Description: Router guards example application
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'product',
  template: `
    <h1 class="product">Product Detail Component Section</h1>
    <input placeholder="Enter your name please." type="text" [formControl]="name">
  `,
  styles: [ `
    .product { background-color: cyan;}
    input { margin-top: 20px; margin-left: 20px;}
    h1 { margin-top: 20px;}
  `]
})
export class ProductComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
