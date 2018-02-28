import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-editindividuel',
  templateUrl: './editindividuel.component.html',
  styleUrls: ['./editindividuel.component.css']
})
export class EditindividuelComponent implements OnInit {
  matchs: any;
  nom: string;
  drapeau: string;
  equipes: any;
  match_id: string;
  match;
  equipe1_id: string;
  equipe1_nom: string;
  equipe2_nom: string;
  equipe1_drapeau: string;
  equipe2_drapeau: string;
  equipe1_but;
  tousLesMatchs;

  constructor(private api: ApiService, private route: ActivatedRoute ) {
  //  constructor(private api: ApiService) {
   this.route.params.subscribe(params => this.match_id = params.id );
    this.api.fetch('get', 'matchs/' + this.match_id, null)
    //this.api.fetch('get', 'matchs', null)
    .then((res: any ) => {
          (res.data) ? this.matchs = res.data : this.matchs = [];
          console.log(this.matchs);
       });
    this.api.fetch('get','matchs', null)
    .then((res: any) =>{
      console.log(res.data);
      this.tousLesMatchs = res.data;

      console.log(this.matchs);
      for(let element of this.matchs){
        if(this.matchs == element._id){
          this.equipe1_but = element.goals1;
        }

      }
      
      });
    this.api.fetch('get','equipes', null)
    .then((res: any) =>{
        this.equipes = res.data;

        console.log(this.equipes);
        for(let element of this.equipes){
          if(this.matchs.equipe1_id == element._id){
            this.equipe1_nom = element.nom;
          }
          if(this.matchs.equipe2_id == element._id){
            this.equipe2_nom = element.nom;
          }
        }

        console.log(this.equipes);
        for(let element of this.equipes){
          if(this.matchs.equipe1_id == element._id){
            this.equipe1_drapeau = element.drapeau;
          }
          if(this.matchs.equipe2_id == element._id){
            this.equipe2_drapeau = element.drapeau;
          }
        } 
    });
 
    }
    

  ngOnInit() {

  }

}
