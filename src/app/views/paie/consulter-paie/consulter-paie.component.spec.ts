import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPaieComponent } from './consulter-paie.component';

describe('ConsulterPaieComponent', () => {
  let component: ConsulterPaieComponent;
  let fixture: ComponentFixture<ConsulterPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
