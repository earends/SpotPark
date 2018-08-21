import { Component, OnInit } from '@angular/core';
import { ParkingSpotsService } from '../parking-spots.service';

import { ParkingSpot } from '../ParkingSpot';

@Component({
  selector: 'app-parking-spots-create',
  templateUrl: './parking-spots-create.component.html',
  styleUrls: ['./parking-spots-create.component.css']
})
export class ParkingSpotsCreateComponent implements OnInit {
  spot = new ParkingSpot();
  constructor(private parkingSpotService: ParkingSpotsService) { }
  returnedSpot:ParkingSpot;
  ngOnInit() {
  }

  onSubmit() {
    this.parkingSpotService.postParkingSpot(this.spot)
    .subscribe(spot => { 
      this.returnedSpot = spot;
      console.log(this.returnedSpot); 
    });
  }

}
