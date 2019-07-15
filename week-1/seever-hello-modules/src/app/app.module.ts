/*
============================================
; Title:  app.module.ts
; Author: Jake Seever
; Date:   14 July 2019
; Description: Application module file.
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShippingModule } from './shipping/shipping.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShippingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
