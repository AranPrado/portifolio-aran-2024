/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardTecComponent } from './CardTec.component';

describe('CardTecComponent', () => {
  let component: CardTecComponent;
  let fixture: ComponentFixture<CardTecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
