import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogbox3Component } from './dialogbox3.component';

describe('Dialogbox3Component', () => {
  let component: Dialogbox3Component;
  let fixture: ComponentFixture<Dialogbox3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dialogbox3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogbox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
