/*
============================================
; Title:  shipping.module.ts
; Author: Jake Seever
; Date:   14 July 2019
; Description: Shipping module TypeScript file.
;===========================================
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';



@NgModule({
  declarations: [ShippingComponent],
  imports: [
    CommonModule
  ],
  exports: [ShippingComponent]
})
export class ShippingModule { }
