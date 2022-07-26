import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogwatchloginComponent } from './dialogwatchlogin.component';

describe('DialogwatchloginComponent', () => {
  let component: DialogwatchloginComponent;
  let fixture: ComponentFixture<DialogwatchloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogwatchloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogwatchloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
