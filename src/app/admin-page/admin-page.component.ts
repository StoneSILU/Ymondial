import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  equipes;
  phases;
  phase_id;
  matchs;
  equipe1_id;
  equipe2_id;
  goals1;  
  goals2;
  date: Date;
  _id;
  
  constructor(private api: ApiService) { 
    
   this.api.fetch('get', 'equipes', null)
   .then((res: any ) => {
      	 (res.data) ? this.equipes = res.data : this.equipes = [];
      	 console.log(this.equipes);
      });

   

   this.api.fetch('get', 'phases', null)
   .then((res: any ) => {
      	 (res.data) ? this.phases = res.data : this.phases = [];
      	 console.log(this.phases);
      });

   }
  
   ajout(){
    
    let objpost = {equipe1_id: this.equipe1_id, equipe2_id: this.equipe2_id, date: this.date, goals1: "0", goals2: "0", phase_id: this.phase_id };
    console.log(objpost);
    this.api.fetch('post','matchs', objpost)
    .then(res => {
          console.log(res);
       });
    }
    
      

  ngOnInit() {

  }


}
