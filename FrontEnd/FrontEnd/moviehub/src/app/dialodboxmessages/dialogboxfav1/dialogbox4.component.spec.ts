import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogbox4Component } from './dialogbox4.component';

describe('Dialogbox4Component', () => {
  let component: Dialogbox4Component;
  let fixture: ComponentFixture<Dialogbox4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dialogbox4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogbox4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
