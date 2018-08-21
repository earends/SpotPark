import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingSpotsService } from '../parking-spots.service';
import { ParkingSpot } from '../ParkingSpot';
import {Location} from '@angular/common';

@Component({
  selector: 'app-parking-spot',
  templateUrl: './parking-spot.component.html',
  styleUrls: ['./parking-spot.component.css']
})

export class ParkingSpotComponent implements OnInit {
 
  spot:ParkingSpot;

  constructor(
    private route: ActivatedRoute,
    private parkingSpotService: ParkingSpotsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getSpot();
    //call service to get id values 
  }

  getSpot(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.parkingSpotService.getParkingSpot(id)
      .subscribe(spot => this.spot = spot);
  }

  goBack(): void {
    this.location.back();
  }

}
