import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogadminaddComponent } from './dialogadminadd.component';

describe('DialogadminaddComponent', () => {
  let component: DialogadminaddComponent;
  let fixture: ComponentFixture<DialogadminaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogadminaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogadminaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
