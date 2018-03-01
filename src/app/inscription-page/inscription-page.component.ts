import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';
import { Router } from '@angular/router';

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
  inscription;
  constructor(private api: ApiService, private router: Router) { }

  register(){
    this.api.fetch('post', 'auth/register',{nom: this.nom, prenom: this.prenom, email: this.email, password: this.password})
    .then(res =>{
      this.inscription = res;
      console.log(this.inscription.success);
      if(this.inscription.success == true){
        this.router.navigate(['/login']);
      }
    })
  }

  ngOnInit() {
  }

}
