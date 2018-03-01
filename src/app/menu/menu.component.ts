import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Classes/user';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() user: User;
  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['login']);
  }

  logout () {
    console.log('logout');
  }
  ngOnInit() {
    console.log((this.user) ? 'user' : 'pas duser');
  }

}
