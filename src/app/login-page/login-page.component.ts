import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';
import { AuthenticationService } from '../Services/Authentication/authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email: string;
  error: string;
  password: string;
  connexion;
  isVisible: boolean;
  constructor(private auth: AuthenticationService, private router: Router) {
   }

   login() {
     this.auth.login(this.email, this.password)
     .subscribe(result => {
         if (result === true) {
           this.router.navigate(['/']);
         } else {
            alert('Invalid Credentials');
         }
       });
   }

  ngOnInit() {
  }

}
