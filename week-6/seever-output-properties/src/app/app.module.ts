/*
============================================
; Title:  app.module.ts
; Author: Jake Seever
; Date:   17 August 2019
; Description: Output Properties Angular example
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule, MatSidenavModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule, MatInputModule} from "@angular/material";
import { FlexLayoutModule} from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { PriceQuoteComponent } from './price-quote/price-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceQuoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
