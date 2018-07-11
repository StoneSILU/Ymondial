import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../Services/Api/api.service';
import { Match } from '../Classes/match';
@Component({
  selector: 'app-editindividuel',
  templateUrl: './editindividuel.component.html',
  styleUrls: ['./editindividuel.component.css']
})
export class EditindividuelComponent implements OnInit {
  match: Match;
  match_id: string;

  constructor(private api: ApiService, private route: ActivatedRoute ) {

   this.route.params.subscribe(params => this.match_id = params.id );
   console.log('match_id : ' + this.match_id);
    this.api.fetch('get', 'matchs/' + this.match_id, null)
      .then((res: any ) => {
        if (res.data) {
          this.match = new Match(res.data);
        } else {
          this.match = new Match({});
        }
       });

  }

  deleteClick() {
    this.api.fetch('delete', 'matchs/' + this.match_id, { id: this.match_id })
      .then((res: any ) => {
       });
 }

 updateClick() {
    this.api.fetch('patch', 'matchs/' + this.match_id, this.match)
      .then((res: any ) => {
     });
 }

  ngOnInit() {

  }

}
