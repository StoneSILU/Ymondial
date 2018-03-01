import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  email:string;
  password:string;
  connexion;
  isVisible:boolean;
  constructor(private api: ApiService, private router: Router) {
    
   }

   login(){
     this.api.fetch('post', 'auth/login', {email: this.email, password: this.password})
    .then((res: any) => {
      this.connexion = res.data;
      console.log(this.connexion.success);
      console.log(res);
      if (this.connexion.success == true){
        this.router.navigate(['/']);
        this.isVisible = false;
      } else {
        this.isVisible = true;
      }
    });
      
    
   }

  ngOnInit() {
  }

}
