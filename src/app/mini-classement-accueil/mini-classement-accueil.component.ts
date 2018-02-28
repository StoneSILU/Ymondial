import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';
import { User } from '../Classes/user';

@Component({
  selector: 'app-mini-classement-accueil',
  templateUrl: './mini-classement-accueil.component.html',
  styleUrls: ['./mini-classement-accueil.component.css']
})
export class MiniClassementAccueilComponent implements OnInit {
  @Input() name: string;
  @Input() data: Array<User>;
  ngOnInit() {
    console.log('name : ' + name);
  }

}
