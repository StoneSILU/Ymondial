import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-editindividuel',
  templateUrl: './editindividuel.component.html',
  styleUrls: ['./editindividuel.component.css']
})
export class EditindividuelComponent implements OnInit {
  _id: any;
  matchs: any;
  nom: string;
  drapeau: string;
  equipes: any;
  match_id: string;
  match;
  equipe1_id: string;
  equipe2_id: string;
  equipe1_nom: string;
  equipe2_nom: string;
  equipe1_drapeau: string;
  equipe2_drapeau: string;
  tousLesMatchs;

  constructor(private api: ApiService, private route: ActivatedRoute ) {

   this.route.params.subscribe(params => this.match_id = params.id );
    this.api.fetch('get', 'matchs/' + this.match_id, null)

    .then((res: any ) => {
          (res.data) ? this.matchs = res.data : this.matchs = [];
          console.log(this.matchs);
       });




    this.api.fetch('get', 'matchs', null)
    .then((res: any) => {
      console.log(res.data);
      this.tousLesMatchs = res.data;
      });

      this.api.fetch('get', 'equipes', null)
      .then((res: any) => {
        this.equipes = res.data;

        console.log(this.equipes);
        for (const element of this.equipes){
          if (this.matchs.equipe1_id === element._id) {
            this.equipe1_nom = element.nom;
          }
          if (this.matchs.equipe2_id === element._id) {
            this.equipe2_nom = element.nom;
          }
        }

        console.log(this.equipes);
        for (const element of this.equipes) {
          if (this.matchs.equipe1_id === element._id) {
            this.equipe1_drapeau = element.drapeau;
          }
          if (this.matchs.equipe2_id === element._id) {
            this.equipe2_drapeau = element.drapeau;
          }
        }
    });
  }

 deleteClick() {
    this.api.fetch('delete', 'matchs/' + this.match_id, { id: this.match_id })
      .then((res: any ) => {
       });
 }

 updateClick() {
    this.api.fetch('patch', 'matchs/' + this.match_id, this.matchs)
      .then((res: any ) => {
     });
 }

  ngOnInit() {

  }

}
