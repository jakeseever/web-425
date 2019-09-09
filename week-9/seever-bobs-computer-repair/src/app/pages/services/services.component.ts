/*
============================================
; Title:  services.component.ts
; Author: Jake Seever
; Date:  01 September 2019
; Modified By: Jake Seever
; Modified Date: 08 September 2019
; Description: services component file for BCRS.
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';
import { InvoiceComponent } from '../invoice/invoice.component';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-services',
  templateUrl: 'services.component.html',
  styles: [ `
  .form-container {
    width: 70%;
    margin: auto;
    margin-top: 4%;
    margin-bottom: 5%;
  }
  .checkGroup {
    margin-left: 8%;
  }
  h2 {
    color: white;
  }
  button {
    float: right;
    color: white;
    margin-bottom: 20px;
  }
  mat-card{
    width: 100%;
  }
  label {
    margin-right: 3%;
  }
  .form {
     width: 90%;
  }
  `
  ]
})
export class ServicesComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }


@Input() parts: number = 0.00;
@Input() labor: number = 0.00;
public total = 0;

public order = {
  pwReset: { name: "Password Reset", price: 39.99, selected: false},
  spywareRemoval: {name: "Spyware Removal", price: 99.99, selected: false},
  ramUpgrade: {name: "RAM Upgrade", price: 129.99, selected: false},
  softwareInstall: {name: "Software Install", price: 49.99, selected: false},
  tuneUp: {name:"PC TuneUp", price: 89.99, selected: false},
  keyboardCleaning: {name: "Keyboard Cleaning", price: 49.99, selected: false},
  diskCleanUp: {name:"Disk Cleanup", price: 149.99, selected: false},
  parts: {name: "Parts", price: this.parts, selected:false},
  labor: {name: "Labor", price: this.labor, selected: false},
  total: {name:"Total Price", price: this.total}
}

  onSubmit(formData) {

    if(formData.checkGroup.pwReset) {
      this.total += this.order.pwReset.price;
      this.order.pwReset.selected = true;
    }

    if(formData.checkGroup.spywareRemoval) {
      this.total += this.order.spywareRemoval.price;
      this.order.spywareRemoval.selected = true;
    }

    if(formData.checkGroup.ramUpgrade) {
      this.total += this.order.ramUpgrade.price;
      this.order.ramUpgrade.selected = true;
    }

    if(formData.checkGroup.softwareInstall) {
      this.total += this.order.softwareInstall.price;
      this.order.softwareInstall.selected = true;
    }

    if(formData.checkGroup.tuneUp) {
      this.total += this.order.tuneUp.price;
      this.order.tuneUp.selected = true;
    }

    if(formData.checkGroup.keyboardCleaning) {
      this.total += this.order.keyboardCleaning.price;
      this.order.keyboardCleaning.selected = true;
    }

    if(formData.checkGroup.diskCleanUp) {
      this.total += this.order.diskCleanUp.price;
      this.order.diskCleanUp.selected = true;
    }

    if(this.parts !== 0 ) {
      this.order.parts.price = this.parts;
      this.order.parts.selected = true;
      this.total += this.parts;
     }

     if(this.labor !== 0 ) {
      this.labor = this.labor * 50;
      this.order.labor.price = this.labor;
      this.order.labor.selected = true;
      this.total += this.labor;
     }

     if(this.total !== 0) {
      this.order.total.price = this.total;
      this.openInvoiceDialog(formData);
     }
     else{
       alert("Please Select a Service.");
     }
  }

  openInvoiceDialog(formData) {

    const dialogConfig = new MatDialogConfig();
    const sendFormData = this.dialog.open(InvoiceComponent)
    sendFormData.componentInstance.order = this.order;

  }
}
