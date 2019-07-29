/*
============================================
; Title:  fruit.service.spec.ts
; Author: Jake Seever
; Date:   29 July 2019
; Description: hello-di dependency injection fruit example.
;===========================================
*/

import { TestBed } from '@angular/core/testing';

import { FruitService } from './fruit/fruit.service';

describe('FruitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FruitService = TestBed.get(FruitService);
    expect(service).toBeTruthy();
  });
});
