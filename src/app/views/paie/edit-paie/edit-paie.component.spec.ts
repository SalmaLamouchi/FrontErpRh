import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaieComponent } from './edit-paie.component';

describe('EditPaieComponent', () => {
  let component: EditPaieComponent;
  let fixture: ComponentFixture<EditPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
