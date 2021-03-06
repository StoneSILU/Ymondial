import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.css']
})
export class RankingPageComponent implements OnInit {

  utilisateurs;
  constructor(private api: ApiService) {
    this.api.fetch('get', 'utilisateurs', null)
    .then((res: any) => {
      (res.data) ? this.utilisateurs = res.data : this.utilisateurs = [];
    });
  }

  addGroupe(id) {
  }

  ngOnInit() {
  }

}
