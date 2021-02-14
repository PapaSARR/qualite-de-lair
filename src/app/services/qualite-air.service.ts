import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QualiteAirService {
  url: string = "https://api.waqi.info/feed/";
  apiKey: string = "c9bfa435faa87a7b56c7e8700d45ed3a5399c4f7";
  constructor(private http: HttpClient) {}

  response(choix:string){
    return this.http.get(this.url+choix+"/?token="+this.apiKey)
  }

}
