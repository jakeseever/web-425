/*
============================================
; Title:  fruit.spec.ts
; Author: Jake Seever
; Date:   03 August 2019
; Description: Form control Angular example
;===========================================
*/

import { Fruit } from './fruit';

describe('Fruit', () => {
  it('should create an instance', () => {
    expect(new Fruit()).toBeTruthy();
  });
});
