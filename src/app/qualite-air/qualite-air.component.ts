import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {QualiteAirService} from '../services/qualite-air.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-qualite-air',
  templateUrl: './qualite-air.component.html',
  styleUrls: ['./qualite-air.component.css'],
})
export class QualiteAirComponent implements OnInit {
  title = 'qualite-air-app';
  api_response?: any;
  date: number = Date.now();
  choix: string = '';
  niveau_indice: string = '';
  couleur: string = '';
  desc_bp: string = '';
  desc_sens: string = '';
  path_img_indice: string = '';
  path_img_bp: string = '';
  path_img_sens: string = '';
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
    this.getData();
    //this.checkoutForm.reset();
  }
  //Détails de la qualité de l'air de la région choisie
  getData(){
    this.aqiService.response(this.choix)
      .subscribe((resp)=> {
        this.api_response = resp;
        console.log(this.api_response);
        this.recommandations(this.api_response.data.aqi);
      });
  }

  recommandations(aqi: number){
    if(aqi<=50){
      this.niveau_indice = "BON";
      this.couleur = "aqua";
      this.desc_bp = "Profitez de vos activités d'extérieures habituelles.";
      this.desc_sens = "Profitez de vos activités d'extérieures habituelles.";
      this.path_img_indice = "assets/img/n-bon.png";
      this.path_img_bp = "assets/img/l-bon.png";
      this.path_img_sens = "assets/img/l-bon.png";
    }else if(aqi>=51 && aqi<=100){
      this.niveau_indice = "MOYEN";
      this.couleur = "aquamarine";
      this.desc_bp = "Profitez de vos activités d'extérieures habituelles.";
      this.desc_sens = "Profitez de vos activités d'extérieures habituelles.";
      this.path_img_indice = "assets/img/n-moy.png";
      this.path_img_bp = "assets/img/l-moy.png";
      this.path_img_sens = "assets/img/l-moy.png";
    }else if(aqi>=101 && aqi<=150){
      this.niveau_indice = "DEGRADE";
      this.couleur = "gold";
      this.desc_bp = "Profitez de vos activités d'extérieures habituelles.";
      this.desc_sens = "Envisagez de réduire les activités de plein air intenses si vous " +
        "ressentez des symptômes. Privilégiez les sorties brèves.";
      this.path_img_indice = "assets/img/n-deg.png";
      this.path_img_bp = "assets/img/l-deg1.png";
      this.path_img_sens = "assets/img/l-deg2.png";
    }else if(aqi>=151 && aqi<=200) {
      this.niveau_indice = "MAUVAIS";
      this.couleur = "crimson";
      this.desc_bp = "Envisagez de réduire les activités physiques intenses en extérieur, " +
        "si vous ressentez des symptômes (yeux qui grattent, toux, maux de gorge...).";
      this.desc_sens = "Envisagez de réduire les activités physiques, " +
        "particuliérement à l'extérieur, surtout si vous éprouvez des symptômes " +
        "(yeux qui grattent, toux, maux de gorge...). Privilégiez les sorties brèves.";
      this.path_img_indice = "assets/img/n-mauv.png";
      this.path_img_bp = "assets/img/l-mauv.png";
      this.path_img_sens = "assets/img/l-mauv.png";
    }else if(aqi>=201 && aqi<=300) {
      this.niveau_indice = "TRES MAUVAIS";
      this.couleur = "brown";
      this.desc_bp = "Envisagez de réduire les activités physiques en extérieur, " +
        "si vous ressentez des symptômes (yeux qui grattent, toux, maux de gorge...).";
      this.desc_sens = "Réduisez les activités physiques, " +
        "particuliérement à l'extérieur, surtout si vous ressentez des symptômes " +
        "(yeux qui grattent, toux, maux de gorge...). Privilégiez les sorties brèves.";
      this.path_img_indice = "assets/img/n-tres-mauv.png";
      this.path_img_bp = "assets/img/l-tres-mauv.png";
      this.path_img_sens = "assets/img/l-tres-mauv.png";
    }else{
      this.niveau_indice = "DANGEREUX";
      this.couleur = "blueviolet";
      this.desc_bp = "Evitez les activités physiques à l'extérieur.";
      this.desc_sens = "Evitez les activités physiques à l'extérieur.";
      this.path_img_indice = "assets/img/n-dang.png";
      this.path_img_bp = "assets/img/l-dang.png";
      this.path_img_sens = "assets/img/l-dang.png";
    }
  }
}
