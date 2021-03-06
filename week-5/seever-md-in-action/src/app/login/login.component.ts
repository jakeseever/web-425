/*
============================================
; Title:  login.component.ts
; Author: Jake Seever
; Date:   10 August 2019
; Description: md in action Angular Materials example
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  styleUrls: ['../app.component.css'],
  template: `
  <!-- Login Form -->
  <div class="parent" fxLayout="row">
    <div class="left" fxFlex></div>
    <div class="right fxFlex">
      <div class="frm-login">
        <mat-card class="login-panel frm-login-panel">
          <mat-card-header class="frm-login-header">
            <mat-toolbar class="frm-login-toolbar">
              Login Form
            </mat-toolbar>
          </mat-card-header>

          <!-- User Inputs-->
          <mat-card-content class="frm-login-body">
            <mat-form-field>
              <input type="text" matInput [(ngModel)]="username" placeholder="Username">
            </mat-form-field>

            <mat-form-field>
              <input type="password" matInput [(ngModel)]="password"  placeholder="Password">
            </mat-form-field>

          </mat-card-content>

          <!-- Buttons section-->
          <mat-card-actions class="frm-login-actions">
            <button mat-raised-button class="btn-login" (click)="onClear()">Cancel</button>
            <button mat-raised-button class="btn-login" (click)="onSubmit()">Sign In</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
