import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParkingSpotsComponent } from './parking-spots/parking-spots.component';
import { ReportComponent } from './report/report.component';
import { AppRoutingModule } from './/app-routing.module';

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
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
