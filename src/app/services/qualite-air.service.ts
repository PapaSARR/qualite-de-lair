import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QualiteAirService {
  url: string = "https://api.waqi.info/feed/";
  apiKey: string = "c9bfa435faa87a7b56c7e8700d45ed3a5399c4f7";
  constructor(private http: HttpClient) {}

  response(choix:string): Observable<any>{
    return this.http.get<any>(this.url+choix+"/?token="+this.apiKey)
  }

}
