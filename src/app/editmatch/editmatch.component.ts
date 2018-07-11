import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';
import { Match } from '../Classes/match';
@Component({
  selector: 'app-editmatch',
  templateUrl: './editmatch.component.html',
  styleUrls: ['./editmatch.component.css']
})
export class EditmatchComponent implements OnInit {
  matchs = [];
  constructor(private api: ApiService) {
    this.api.fetch('get', 'matchs', null)
    .then((res: any ) => {
          if (res.data) {
            res.data.forEach((element, idx) => {
              const newMatch = new Match(element);
              this.matchs.push(newMatch);
            });
          }
       });
    }

  ngOnInit() {
  }

}
