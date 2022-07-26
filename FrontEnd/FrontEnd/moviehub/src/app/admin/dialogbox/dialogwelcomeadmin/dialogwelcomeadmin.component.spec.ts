import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogwelcomeadminComponent } from './dialogwelcomeadmin.component';

describe('DialogwelcomeadminComponent', () => {
  let component: DialogwelcomeadminComponent;
  let fixture: ComponentFixture<DialogwelcomeadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogwelcomeadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogwelcomeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
