import { Component, OnInit } from '@angular/core';
import { ParkingSpotsService } from '../parking-spots.service';
import {ParkingSpot} from '../ParkingSpot';


@Component({
  selector: 'app-parking-spots',
  templateUrl: './parking-spots.component.html',
  styleUrls: ['./parking-spots.component.css']
})
export class ParkingSpotsComponent implements OnInit {
  

  parkingSpots: ParkingSpot[];
  selectedSpot: ParkingSpot;
  constructor(private parkingSpotService: ParkingSpotsService) { }

  ngOnInit() {
    this.getSpots();
  }
  
  getSpots(): void {
    
    this.parkingSpotService.getParkingSpots()
    .subscribe(parkingSpots => this.parkingSpots = parkingSpots);
  }

  onSelect(spot: ParkingSpot): void {
    this.selectedSpot = spot;
  }

}
