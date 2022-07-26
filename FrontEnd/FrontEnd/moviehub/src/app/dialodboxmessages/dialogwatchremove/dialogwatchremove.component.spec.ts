import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogwatchremoveComponent } from './dialogwatchremove.component';

describe('DialogwatchremoveComponent', () => {
  let component: DialogwatchremoveComponent;
  let fixture: ComponentFixture<DialogwatchremoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogwatchremoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogwatchremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
