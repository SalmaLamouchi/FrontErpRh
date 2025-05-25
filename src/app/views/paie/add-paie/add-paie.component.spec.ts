import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaieComponent } from './add-paie.component';

describe('AddPaieComponent', () => {
  let component: AddPaieComponent;
  let fixture: ComponentFixture<AddPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
