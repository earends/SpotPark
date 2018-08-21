import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parking-spots-delete',
  templateUrl: './parking-spots-delete.component.html',
  styleUrls: ['./parking-spots-delete.component.css']
})
export class ParkingSpotsDeleteComponent implements OnInit {
  public id:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
