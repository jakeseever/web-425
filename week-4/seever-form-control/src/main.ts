/*
============================================
; Title:  main.ts
; Author: Jake Seever
; Date:   03 August 2019
; Description: Form control Angular example
;===========================================
*/


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
