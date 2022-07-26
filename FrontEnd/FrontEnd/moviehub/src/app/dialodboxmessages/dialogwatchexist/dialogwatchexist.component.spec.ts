import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogwatchexistComponent } from './dialogwatchexist.component';

describe('DialogwatchexistComponent', () => {
  let component: DialogwatchexistComponent;
  let fixture: ComponentFixture<DialogwatchexistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogwatchexistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogwatchexistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
