import { Component, OnInit } from '@angular/core';
import {QualiteAirService} from '../services/qualite-air.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-qualite-air',
  templateUrl: './qualite-air.component.html',
  styleUrls: ['./qualite-air.component.css']
})
export class QualiteAirComponent implements OnInit {
  title = 'qualite-air-app';
  api_response: any;
  date: number = Date.now();
  choix: string = '';
  checkoutForm = this.formBuilder.group({
    ville: 'Grenoble'
  });
  constructor(private aqiService: QualiteAirService,  private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    // Process checkout data here
    this.choix = this.checkoutForm.value.ville;
    console.log('Votre choix est ', this.choix);
    this.getData(this.choix);
    //this.checkoutForm.reset();
  }
  //Détails de la qualité de l'air de la région choisie
  getData(choix:string){
    this.aqiService.response(choix)
      .subscribe((resp: any )=> {
        this.api_response = resp;
        console.log(this.api_response);
      });

  }
}
