import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.css']
})
export class InscriptionPageComponent implements OnInit {
  nom:string;
  prenom:string;
  email:string;
  password:string;
  constructor(private api: ApiService) { }

  register(){
    this.api.fetch('post', 'auth/register',{nom: this.nom, prenom: this.prenom, email: this.email, password: this.password})
    .then(res =>{
      console.log(res);
    })
  }

  ngOnInit() {
  }

}
