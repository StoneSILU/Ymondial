import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';
import { ok } from 'assert';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  users;

  constructor(private api: ApiService) {
    this.api.fetch('get', 'login', null)
    .then(res => {
      this.users = res;
      console.log(this.users);
      // tslint:disable-next-line:one-line
      if (this.users.success = true){
        // ok
      }
      // tslint:disable-next-line:one-line
      else {
        // no
      }
    });


   }


  ngOnInit() {
  }

}
