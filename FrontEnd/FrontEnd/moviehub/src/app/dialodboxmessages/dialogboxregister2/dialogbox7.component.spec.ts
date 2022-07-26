import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogbox7Component } from './dialogbox7.component';

describe('Dialogbox7Component', () => {
  let component: Dialogbox7Component;
  let fixture: ComponentFixture<Dialogbox7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dialogbox7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogbox7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
