/*
============================================
; Title:  shipping.component.ts
; Author: Jake Seever
; Date:   14 July 2019
; Description: Shipping module component file with messages.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
      Howdy from the ShippingComponent
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
