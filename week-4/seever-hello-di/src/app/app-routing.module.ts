/*
============================================
; Title:  app-routing.module.ts
; Author: Jake Seever
; Date:   29 July 2019
; Description: hello-di fruit example.
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
