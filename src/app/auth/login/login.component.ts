import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.compoment.css' ]
})
export class LoginComponent implements OnInit {

  constructor( private route:Router ) { }

  ngOnInit(): void {
  }

  login() {
    this.route.navigateByUrl('/');
  }

}
