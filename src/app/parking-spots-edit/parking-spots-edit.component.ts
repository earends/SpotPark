import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingSpotsService } from '../parking-spots.service';
import {Location} from '@angular/common';
import { ParkingSpot } from '../ParkingSpot';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parking-spots-edit',
  templateUrl: './parking-spots-edit.component.html',
  styleUrls: ['./parking-spots-edit.component.css']
})
export class ParkingSpotsEditComponent implements OnInit {
  public id:number;
  spot:ParkingSpot;

  constructor(private route: ActivatedRoute,
    private parkingSpotService: ParkingSpotsService,
    private location: Location,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.parkingSpotService.getParkingSpot(this.id)
    .subscribe(spot => this.spot = spot);
  }

  onSubmit(): void {
    this.updateSpot();
  }

  updateSpot(): void {
    this.parkingSpotService.updateParkingSpot(this.spot)
    .subscribe(spot =>  this.router.navigate(['/Home']) );
  }

}
