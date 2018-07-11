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

  constructor(private api: ApiService) {
    this.api.fetch('get', 'utilisateurs', null)
      .then((res: any) => {
        let utilisateurs;
        const usersToSave = [];
        (res.data) ? utilisateurs = res.data : utilisateurs = [];
        for (let i = 0; i < 10; i++) {
          usersToSave[i] = new User(utilisateurs[i]);
        }
        this.data = usersToSave;
      });
  }

}
