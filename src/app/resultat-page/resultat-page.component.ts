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
          this.rencontres = [];
          res.data.forEach(element => {
            this.heure = element.date;
            const debut = new Date(this.heure);
            const fin = new Date(debut).setMinutes(debut.getMinutes() + 105);
            // tslint:disable-next-line:max-line-length
            (!this.isFuturMatch(fin)) ? this.rencontres.push(element) : console.log('') ; // plus 90 minutes et 15 min entre les deux mi-temps
            element.date = fin;
          });
      });
  }

  isFuturMatch(date: Number): Boolean {
    if (date > new Date().getTime()) {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit() {
  }

}
