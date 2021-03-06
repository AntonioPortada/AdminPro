import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public tema = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {

    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    
    this.tema?.setAttribute('href', url);

  }

}
