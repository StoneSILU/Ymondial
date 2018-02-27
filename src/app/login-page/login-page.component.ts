import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  email:string;
  password:string;
  constructor(private api: ApiService) {
    


   }

   login(){
     console.log("email " + this.email);
     console.log("password " + this.password);
     this.api.fetch('post', 'auth/login', {email: this.email, password: this.password})
    .then(res => {
      console.log(res);
      
    });
   }

  ngOnInit() {
  }

}
