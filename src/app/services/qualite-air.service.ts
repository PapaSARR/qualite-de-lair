import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QualiteAirService {
  url: string = "http://api.airvisual.com/v2/";
  apiKey: string = "3b9e0879-80b0-4bbd-b3f1-fa15f4eabc57";

  constructor(private http: HttpClient) {}

  countries(){
    return this.http.get(this.url+"countries?key="+this.apiKey)
  }

}
