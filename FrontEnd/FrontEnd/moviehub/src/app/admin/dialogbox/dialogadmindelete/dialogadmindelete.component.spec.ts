import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogadmindeleteComponent } from './dialogadmindelete.component';

describe('DialogadmindeleteComponent', () => {
  let component: DialogadmindeleteComponent;
  let fixture: ComponentFixture<DialogadmindeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogadmindeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogadmindeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
