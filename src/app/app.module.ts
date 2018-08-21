import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParkingSpotsComponent } from './parking-spots/parking-spots.component';
import { ReportComponent } from './report/report.component';
import { AppRoutingModule } from './/app-routing.module';
import { ParkingSpotsCreateComponent } from './parking-spots-create/parking-spots-create.component';
import { ParkingSpotsEditComponent } from './parking-spots-edit/parking-spots-edit.component';
import { ParkingSpotsDeleteComponent } from './parking-spots-delete/parking-spots-delete.component';
import { ParkingSpotComponent } from './parking-spot/parking-spot.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ParkingSpotsComponent,
    NavbarComponent,
    ReportComponent,
    ParkingSpotsCreateComponent,
    ParkingSpotsEditComponent,
    ParkingSpotsDeleteComponent,
    ParkingSpotComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
