import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpotsEditComponent } from './parking-spots-edit.component';

describe('ParkingSpotsEditComponent', () => {
  let component: ParkingSpotsEditComponent;
  let fixture: ComponentFixture<ParkingSpotsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingSpotsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSpotsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
