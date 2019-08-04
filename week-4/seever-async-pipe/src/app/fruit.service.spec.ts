/*
============================================
; Title:  fruit.service.spec.ts
; Author: Jake Seever
; Date:   03 August 2019
; Description: Form control Angular example
;===========================================
*/

import { TestBed } from '@angular/core/testing';

import { FruitService } from './fruit.service';

describe('FruitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FruitService = TestBed.get(FruitService);
    expect(service).toBeTruthy();
  });
});
