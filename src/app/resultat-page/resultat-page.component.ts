import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-resultat-page',
  templateUrl: './resultat-page.component.html',
  styleUrls: ['./resultat-page.component.css']
})
export class ResultatPageComponent implements OnInit {
  rencontres;


  constructor(private api: ApiService) { 
    this.api.fetch('get', 'matchs', null)
      .then((res: any) => {
          this.rencontres = res;
      });
     
  }

  ngOnInit() {
  }

}
