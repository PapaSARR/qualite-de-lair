import { Component, OnInit } from '@angular/core';
import {QualiteAirService} from '../services/qualite-air.service';

@Component({
  selector: 'app-qualite-air',
  templateUrl: './qualite-air.component.html',
  styleUrls: ['./qualite-air.component.css']
})
export class QualiteAirComponent implements OnInit {
  title = 'qualite-air-app';
  choix: string = 'Grenoble';
  countries: Object = {};

  constructor(private aqiService: QualiteAirService) { }

  ngOnInit(): void {

  }

  //Détails de la qualité de l'air de la région choisie
  getCountries(){
    return this.aqiService.countries()
      .subscribe(resp => {
        console.log(resp);
      });

  }
}
