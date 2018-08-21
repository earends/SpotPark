import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingSpotsService } from '../parking-spots.service';
import {Location} from '@angular/common';
import {ParkingSpot} from '../ParkingSpot';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parking-spots-delete',
  templateUrl: './parking-spots-delete.component.html',
  styleUrls: ['./parking-spots-delete.component.css']
})
export class ParkingSpotsDeleteComponent implements OnInit {
  public id:number;
  spot:ParkingSpot;
  constructor( private route: ActivatedRoute,
    private parkingSpotService: ParkingSpotsService,
    private location: Location,
    private router:Router
  ) { }

  ngOnInit():void {
    this.getSpot();
  }

  getSpot(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.parkingSpotService.getParkingSpot(this.id)
      .subscribe(spot => this.spot = spot);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.deleteSpot()
  }

  deleteSpot(): void {
    this.parkingSpotService.deleteParkingSpot(this.id)
    .subscribe(spot =>  this.router.navigate(['/Home']));
  }

}
