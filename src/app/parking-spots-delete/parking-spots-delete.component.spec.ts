import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpotsDeleteComponent } from './parking-spots-delete.component';

describe('ParkingSpotsDeleteComponent', () => {
  let component: ParkingSpotsDeleteComponent;
  let fixture: ComponentFixture<ParkingSpotsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingSpotsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSpotsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
