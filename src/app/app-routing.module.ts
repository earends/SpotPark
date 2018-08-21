import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParkingSpotsComponent }  from './parking-spots/parking-spots.component';
import { ParkingSpotsCreateComponent }  from './parking-spots-create/parking-spots-create.component';
import { ParkingSpotComponent }  from './parking-spot/parking-spot.component';
import { ParkingSpotsEditComponent }  from './parking-spots-edit/parking-spots-edit.component';
import { ParkingSpotsDeleteComponent }  from './parking-spots-delete/parking-spots-delete.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: ParkingSpotsComponent },
  {path: 'Create',component: ParkingSpotsCreateComponent},
  {path: 'Spot/:id', component:ParkingSpotComponent},
  {path: 'Edit/:id',component:ParkingSpotsEditComponent},
  {path: 'Delete/:id',component:ParkingSpotsDeleteComponent},
  {path:'**',component:PageNotFoundComponent}
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
