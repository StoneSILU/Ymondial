import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newmatch-page',
  templateUrl: './newmatch-page.component.html',
  styleUrls: ['./newmatch-page.component.css']
})
export class NewmatchPageComponent implements OnInit {
  equipes: string[];
  rencontres = 'france';

  constructor() {
    console.log('constructor ran...');
  }


  ngOnInit() {
    console.log('ngOnInit ran...');
    this.equipes = [];
  }

  addEquipe(equipe) {
    console.log(equipe);
    this.equipes.unshift(equipe);
    return false;
  }

  deleteEquipe(equipe) {
    for (let i = 0; i < this.equipes.length; i++) {
      if (this.equipes[i] === equipe) {
        this.equipes.splice(i, 1);
      }
    }
  }
}
