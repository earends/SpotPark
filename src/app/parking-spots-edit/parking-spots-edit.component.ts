import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parking-spots-edit',
  templateUrl: './parking-spots-edit.component.html',
  styleUrls: ['./parking-spots-edit.component.css']
})
export class ParkingSpotsEditComponent implements OnInit {
  public id:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
