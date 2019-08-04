/*
============================================
; Title:  fruit.spec.ts
; Author: Jake Seever
; Date:   29 July 2019
; Description: hello-di dependency injection fruit example.
;===========================================
*/

import { Fruit } from './fruit/fruit';

describe('Fruit', () => {
  it('should create an instance', () => {
    expect(new Fruit(0, "Cherry", "Red")).toBeTruthy();
  });
});
