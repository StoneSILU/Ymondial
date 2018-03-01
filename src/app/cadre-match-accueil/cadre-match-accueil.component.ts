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
  phase;
  constructor(private api: ApiService) {
    
    this.api.fetch('get', 'phases/getcurrent',null).then((phase:any) =>{
      this.phase= phase.data[0];
      console.log("phs",this.phase);
      this.api.fetch('get', 'matchs?phase_id='+this.phase._id, null)
      .then((res: any) => {
          if(res.data){
            this.rencontres = res.data;
            this.rencontres.forEach(match => {
              this.api.fetch('get', 'pronos?match_id='+match._id +'&utilisateur_id=5a8bfd37d3d7ad0a4732cfc1', null).then(
              (prono:any) =>{
                if(prono.data.length > 0){
                  match.prono = prono.data[0];
                }
              });
            });
          }else{ 
            this.rencontres = [];
          }
          console.log("rencontre",this.rencontres);
      });
    });

  }

  ngOnInit() {

  }

  createUrl(path,id=""){
    return path+id;
  }



}
