import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpotsComponent } from './parking-spots.component';

describe('ParkingSpotsComponent', () => {
  let component: ParkingSpotsComponent;
  let fixture: ComponentFixture<ParkingSpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingSpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
