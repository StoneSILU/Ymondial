import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-cadre-match-accueil',
  templateUrl: './cadre-match-accueil.component.html',
  styleUrls: ['./cadre-match-accueil.component.css']
})
export class CadreMatchAccueilComponent implements OnInit {
  rencontres: any;

  constructor(private api: ApiService) {
   this.api.fetch('get', 'matchs', null)
      .then((res: any) => {
          this.rencontres = res.data;
      });
     }

  ngOnInit() {

  }
}
