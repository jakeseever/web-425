/*
============================================
; Title:  login.guard.ts
; Author: Jake Seever
; Date:   28 July 2019
; Description: Router guards example application
;===========================================
*/

import { CanActivate, Router} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    let loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert("You're not currently logged in and will be redirected to Login Page");
      this.router.navigate(["/login"]);
    }

    return loggedIn;
  }
}
