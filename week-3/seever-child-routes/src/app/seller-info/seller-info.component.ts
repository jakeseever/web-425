/*
============================================
; Title:  seller-info.component.ts
; Author: Jake Seever
; Date:   28 July 2019
; Description: Child Routes example application.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-seller-info',
  template: `
    The seller is Jake Seever, id {{ sellerID }}
  `,
  styles: [ `
    :host { background: yellow;}
  `
  ]
})
export class SellerInfoComponent implements OnInit {

  sellerID: string;

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
