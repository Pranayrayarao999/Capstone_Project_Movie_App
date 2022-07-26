import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogmovieupdateComponent } from './dialogmovieupdate.component';

describe('DialogmovieupdateComponent', () => {
  let component: DialogmovieupdateComponent;
  let fixture: ComponentFixture<DialogmovieupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogmovieupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogmovieupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
