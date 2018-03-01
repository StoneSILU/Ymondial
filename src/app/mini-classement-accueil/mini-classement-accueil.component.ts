import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-mini-classement-accueil',
  templateUrl: './mini-classement-accueil.component.html',
  styleUrls: ['./mini-classement-accueil.component.css']
})
export class MiniClassementAccueilComponent implements OnInit {
  utilisateurs;
  top10 :any[] = [];
  constructor(private api: ApiService) { 
    this.api.fetch('get','utilisateurs',null)
    .then((res:any) => {
      (res.data) ? this.utilisateurs = res.data : this.utilisateurs = [];
      for(let i = 0; i< 10; i++)
      {     
        this.top10[i] = this.utilisateurs[i];
      }
    })
  }

  ngOnInit() {
  }

}
