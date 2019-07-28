/*
============================================
; Title:  product-detail.component.ts
; Author: Jake Seever
; Date:   28 July 2019
; Description: Child Routes example application.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-product-detail',
  template: `
    <div class="product">
      <h1>Product Details for the Product: {{productId}}</h1>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller', sellerId]">Seller Info</a></p>
    </div>
  `,
  styles: [ `
    p {
      color: red;
      margin-top: 20px;
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId = 5678;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}

