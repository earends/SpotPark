import { Injectable } from '@angular/core';
import {ParkingSpot} from './ParkingSpot';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ParkingSpotsService {
  private parking_spot_url = 'https://localhost:44393/api/ParkingSpots';  // URL to web api

  constructor(
    private http: HttpClient,
   
    
  ) { }

  getParkingSpots():Observable<ParkingSpot[]> {
     return this.http.get<ParkingSpot[]>(this.parking_spot_url)
      .pipe(
        catchError(this.handleError('getSpots', []))
      );
  }

  postParkingSpot(spot:ParkingSpot):Observable<ParkingSpot> {
    return this.http.post<ParkingSpot>(this.parking_spot_url, spot, httpOptions).pipe(
      catchError(this.handleError<ParkingSpot>('addSpot'))
    ); 
  }

  /** DELETE: delete the hero from the server */
  deleteParkingSpot (id: number): Observable<ParkingSpot> {
    const url = `${this.parking_spot_url}/${id}`;
    
    return this.http.delete<ParkingSpot>(url, httpOptions).pipe(
      catchError(this.handleError<ParkingSpot>('deleteSpot'))
    );
  }

  /** PUT: update the hero on the server */
  updateParkingSpot(spot:ParkingSpot): Observable<ParkingSpot> {
    const url = `${this.parking_spot_url}/${spot.id}`;
    return this.http.put(url, spot, httpOptions).pipe(
      catchError(this.handleError<any>('updateSpot'))
    );
  }


   /** GET hero by id. Will 404 if id not found */
   getParkingSpot(id: number): Observable<ParkingSpot> {
    const url = `${this.parking_spot_url}/${id}`;
    return this.http.get<ParkingSpot>(url).pipe(
      catchError(this.handleError<ParkingSpot>(`getSpot id=${id}`))
    );
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
