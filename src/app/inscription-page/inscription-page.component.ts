import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.css']
})
export class InscriptionPageComponent implements OnInit {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  choix_equipe_id: string;
  choix_buteur_id: string;
  inscription;
  buteurs;
  equipes;

  constructor(private api: ApiService, private router: Router) {
    this.api.fetch('get', 'buteurs', null)
      .then((res: any) => {
        (res.data) ? this.buteurs = res.data : this.buteurs = [];
      });
    this.api.fetch('get', 'equipes', null)
      .then((res: any) => {
        (res.data) ? this.equipes = res.data : this.equipes = [];
      });
  }

  register() {
    this.api.fetch(
      'post',
      'auth/register',
      {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        password: this.password,
        choix_equipe_id: this.choix_equipe_id,
        choix_buteur_id: this.choix_buteur_id
      })
      .then((res: any) => {
        alert('Inscription réussie');
        this.router.navigate(['/login']);
      })
      .catch(err => {
        alert('Echec de l\'inscription, ce mail est existe déjà');
      });
  }

  ngOnInit() {
  }

}
