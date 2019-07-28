/*
============================================
; Title:  unsaved-changes.guard.ts
; Author: Jake Seever
; Date:   28 July 2019
; Description: Router guards example application
;===========================================
*/

import { CanDeactivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { ProductComponent } from "./product/product.component";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductComponent> {

  canDeactivate(component: ProductComponent) {
    if (component.name.dirty) {
      return window.confirm("You have unsaved changes.  Are you sure that you want to leave?");
    } else {
      return true;
    }
  }
}
