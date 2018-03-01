import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';
import { User } from '../Classes/user';

@Component({
  selector: 'app-accueil-page',
  templateUrl: './accueil-page.component.html',
  styleUrls: ['./accueil-page.component.css']
})
export class AccueilPageComponent implements OnInit {
  title = 'Prono Football School';
  cName = 'toto';
  token: string;
  user: User;
  constructor(private api: ApiService) {
  }


  ngOnInit() {
    console.log('OnInit');
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      this.user = new User(user.user);
    }
    console.log(this.user);
  }

}
