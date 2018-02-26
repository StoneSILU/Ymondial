import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.css']
})
export class InscriptionPageComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}
