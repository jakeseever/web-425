/*
============================================
; Title:  app.module.ts
; Author: Jake Seever
; Date:   01 September 2019
; Modified By: Jake Seever
; Modified Date: 08 September 2019
; Description: App module file for BCRS.
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './pages/services/services.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { HeaderComponent } from './shared/header/header.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';

import { MatFormFieldModule, MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule, MatInputModule, MatCheckboxModule} from "@angular/material";
import { FlexLayoutModule} from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    InvoiceComponent,
    HeaderComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
