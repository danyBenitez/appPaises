import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {  
      console.log(error);
      return of(result as T);
    };
  }

  constructor(private httpClient: HttpClient) { }

  getAllPaises(): Observable<any>{
    return this.httpClient.get("https://restcountries.eu/rest/v2/all").pipe(
      catchError(this.handleError)
    );
  }
}
