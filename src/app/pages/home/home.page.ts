import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.sass']
})
export class HomePage implements OnInit {

  commentaries = [];

  constructor() { }

  ngOnInit() {

  }
}
