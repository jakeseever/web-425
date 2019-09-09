/*
============================================
; Title:  header.component.ts
; Author: Jake Seever
; Date:  01 September 2019
; Modified By: Jake Seever
; Modified Date: 08 September 2019
; Description: Header component file for BCRS.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html' ,
  styles: [ `
  h1 {
    width: 60%;
    text-align: center;
  }
  mat-icon {
    margin-top: -1%;
  }
  .nav-link {
    text-decoration: none;
    color: white;
  }
  `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
