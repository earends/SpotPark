import { TestBed, inject } from '@angular/core/testing';

import { ParkingSpotsService } from './parking-spots.service';

describe('ParkingSpotsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkingSpotsService]
    });
  });

  it('should be created', inject([ParkingSpotsService], (service: ParkingSpotsService) => {
    expect(service).toBeTruthy();
  }));
});
