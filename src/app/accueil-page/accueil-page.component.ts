import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-accueil-page',
  templateUrl: './accueil-page.component.html',
  styleUrls: ['./accueil-page.component.css']
})
export class AccueilPageComponent implements OnInit {
title = 'Prono Football School';
  constructor(private api: ApiService) { 
  	this.api.fetch('get', 'matchs', null)
      .then(res => {
        console.log(res[0].equipe1_id.nom);
      });
  }

  ngOnInit() {
  }

}
