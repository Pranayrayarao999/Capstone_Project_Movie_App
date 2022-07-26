import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogbox6Component } from './dialogbox6.component';

describe('Dialogbox6Component', () => {
  let component: Dialogbox6Component;
  let fixture: ComponentFixture<Dialogbox6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dialogbox6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogbox6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
