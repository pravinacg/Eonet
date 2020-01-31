import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { HttpHeaders, HttpParams } from '@angular/common/http'; 
import { eonetRoot,CategoriesEntity} from '../data/dataclass';

 @Injectable({
      providedIn: 'root'
    })
    export class EonetService {
        private _eventUrl = 'https://localhost:44308/api/events';
        private Url = 'https://localhost:44308/api/events';
        private SortUrl = 'https://localhost:44308/api/events/SortEvents?';
        private catgoriesURL='https://localhost:44308/api/events/EventCategories';
        private _serviceUrl = 'https://localhost:44308/api/events';
        private dateURL='https://localhost:44308/api/events/GeteventsByDate?start=2019-01-01&end=2019-01-31';

        eventLst: eonetRoot[] = [];

        getAllEvents() {
            return this.http.get(this.Url);
          }
        constructor(private http: HttpClient) { }

        searchEventByDate(start,end)
        {
          const params = new HttpParams()
          .set('start', start)
          .set('end', end);
          
          return this.http.get(this.dateURL);
        }
        sortCol(order,col)
        {
          const params = new HttpParams()
          .set('orderby', order)
          .set('col', col);
         
          return this.http.get(this.SortUrl +params);
              
        }

        getEoEvents() {
          return this.http.get(this._eventUrl).
              pipe(
                 map((data: eonetRoot[]) => {
                   return data;
                 }), catchError( error => {
                   return throwError( 'Something went wrong!' );
                 })
              )
          }

          getCatagories() {
            return this.http.get(this.catgoriesURL).
                pipe(
                   map((data: CategoriesEntity[]) => {
                     return data;
                   }), catchError( error => {
                     return throwError( 'Something went wrong!' );
                   })
                )
            }

          searchEvent(eventname:string) {
            return this.http.get(this._serviceUrl + eventname).
                pipe(
                   map((data: eonetRoot[]) => {
                     return data;
                   }), catchError( error => {
                     return throwError( 'Something went wrong!' );
                   })
                )
            }
        
           

    }
    
 


  

