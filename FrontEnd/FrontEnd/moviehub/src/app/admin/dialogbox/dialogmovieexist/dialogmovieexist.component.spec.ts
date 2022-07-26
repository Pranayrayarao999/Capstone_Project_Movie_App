import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogmovieexistComponent } from './dialogmovieexist.component';

describe('DialogmovieexistComponent', () => {
  let component: DialogmovieexistComponent;
  let fixture: ComponentFixture<DialogmovieexistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogmovieexistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogmovieexistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
