import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';
import {Router} from '@angular/router';

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
          (res.data) ? this.rencontres = res.data : this.rencontres = [];
          console.log(this.rencontres);
      });

    }

  ngOnInit() {

  }

  createUrl(path,id=""){
    return path+id;
  }



}
