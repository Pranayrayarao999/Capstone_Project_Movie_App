import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogbox5Component } from './dialogbox5.component';

describe('Dialogbox5Component', () => {
  let component: Dialogbox5Component;
  let fixture: ComponentFixture<Dialogbox5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dialogbox5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogbox5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
