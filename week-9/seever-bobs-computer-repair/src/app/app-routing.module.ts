/*
============================================
; Title:  app-routing.module.ts
; Author: Jake Seever
; Date:  01 September 2019
; Modified By: Jake Seever
; Modified Date: 07 September 2019
; Description: Routing Module file for BCRS.
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {BaseLayoutComponent} from "./shared/base-layout/base-layout.component";
import {HeaderComponent} from "./shared/header/header.component";
import {ServicesComponent} from "./pages/services/services.component";
import {InvoiceComponent} from "./pages/invoice/invoice.component"




const routes: Routes = [
  { path: 'base-layout', component: BaseLayoutComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'invoice', component: InvoiceComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
