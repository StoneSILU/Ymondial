import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-accueil-page',
  templateUrl: './accueil-page.component.html',
  styleUrls: ['./accueil-page.component.css']
})
export class AccueilPageComponent implements OnInit {
  title = 'Prono Football School';
  cName = 'toto';
  constructor(private api: ApiService) {
    console.log(this.cName);
  }


  ngOnInit() {
  }

}
