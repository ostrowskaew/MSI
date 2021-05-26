/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentalEquipmentSelectInfoComponent } from './rental-equipment-select-info.component';

describe('RentalEquipmentSelectInfoComponent', () => {
  let component: RentalEquipmentSelectInfoComponent;
  let fixture: ComponentFixture<RentalEquipmentSelectInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalEquipmentSelectInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalEquipmentSelectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
