import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulteCongeComponent } from './consulte-conge.component';

describe('ConsulteCongeComponent', () => {
  let component: ConsulteCongeComponent;
  let fixture: ComponentFixture<ConsulteCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulteCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulteCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
