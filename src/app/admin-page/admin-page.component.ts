import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  equipes;
  matchs;
  equipe1_id;
  equipe2_id;
  goals1;  
  goals2;
  date: Date;
  
  constructor(private api: ApiService) { 
    
   this.api.fetch('get', 'equipes', null)
   .then((res: any ) => {
      	 (res.data) ? this.equipes = res.data : this.equipes = [];
      	 console.log(this.equipes);
      });

   }
  
   ajout(){
    
    let objpost = {equipe1_id: this.equipe1_id, equipe2_id: this.equipe2_id, date: this.date, goals1: "0", goals2: "0" };
    console.log(objpost);
    this.api.fetch('post','matchs', objpost)
    .then(res => {
          console.log(res);
       });
    }
    
  

  ngOnInit() {

  }


}
