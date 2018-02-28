import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-editmatch',
  templateUrl: './editmatch.component.html',
  styleUrls: ['./editmatch.component.css']
})
export class EditmatchComponent implements OnInit {
  matchs;
  constructor(private api: ApiService) { 
    this.api.fetch('get', 'matchs', null)
    .then((res: any ) => {
          (res.data) ? this.matchs = res.data : this.matchs = [];
          console.log(this.matchs);
       });
 
    }
    

  ngOnInit() {
  }

}
