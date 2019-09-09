/*
============================================
; Title:  invoice.component.ts
; Author: Jake Seever
; Date:   01 September 2019
; Modified By: Jake Seever
; Modified Date: 08 September 2019
; Description: Invoice component file for BCRS.
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-invoice',
  templateUrl: "invoice.component.html" ,
  styles: [ `
    .container {
      max-height: 100%;
    }
    button {
      float: right;
      margin-left: 70%;
    }
  `
  ]
})

export class InvoiceComponent implements OnInit {

  @Input() public order;

  curDate=new Date();

  constructor(private dialog: MatDialogRef<ServicesComponent>) { }

  ngOnInit() {
  }

  confirm() {
    this.dialog.close();
    location.reload();
  }
}
