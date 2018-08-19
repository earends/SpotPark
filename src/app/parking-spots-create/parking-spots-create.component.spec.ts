import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpotsCreateComponent } from './parking-spots-create.component';

describe('ParkingSpotsCreateComponent', () => {
  let component: ParkingSpotsCreateComponent;
  let fixture: ComponentFixture<ParkingSpotsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingSpotsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSpotsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
