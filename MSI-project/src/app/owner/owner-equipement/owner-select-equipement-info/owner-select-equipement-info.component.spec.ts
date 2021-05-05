/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OwnerSelectEquipementInfoComponent } from './owner-select-equipement-info.component';

describe('OwnerSelectEquipementInfoComponent', () => {
  let component: OwnerSelectEquipementInfoComponent;
  let fixture: ComponentFixture<OwnerSelectEquipementInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerSelectEquipementInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerSelectEquipementInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
