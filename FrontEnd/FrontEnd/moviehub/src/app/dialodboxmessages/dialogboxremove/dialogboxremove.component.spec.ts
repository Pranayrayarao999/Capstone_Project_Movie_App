import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogboxremoveComponent } from './dialogboxremove.component';

describe('DialogboxremoveComponent', () => {
  let component: DialogboxremoveComponent;
  let fixture: ComponentFixture<DialogboxremoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogboxremoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogboxremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
