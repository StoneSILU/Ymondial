import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-resultat-page',
  templateUrl: './resultat-page.component.html',
  styleUrls: ['./resultat-page.component.css']
})
export class ResultatPageComponent implements OnInit {
  rencontres;
  heure;


  constructor(private api: ApiService) { 
    this.api.fetch('get', 'matchs', null)
      .then((res: any) => {
          this.rencontres = res;
          this.rencontres.forEach(element => {
            this.heure = element.date;
            var debut = new Date(this.heure);
            var fin = new Date(debut);
            fin.setMinutes(debut.getMinutes() +105);// plus 90 minutes et 15 min entre les deux mi-temps
            element.date = fin;
          });
      });
     
  }

  ngOnInit() {
  }

}
