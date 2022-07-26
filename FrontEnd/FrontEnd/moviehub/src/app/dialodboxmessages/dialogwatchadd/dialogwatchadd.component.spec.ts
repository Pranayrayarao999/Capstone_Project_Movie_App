import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogwatchaddComponent } from './dialogwatchadd.component';

describe('DialogwatchaddComponent', () => {
  let component: DialogwatchaddComponent;
  let fixture: ComponentFixture<DialogwatchaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogwatchaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogwatchaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
