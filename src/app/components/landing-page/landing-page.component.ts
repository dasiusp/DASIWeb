import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 3500) {
      document.getElementById('intercomp-parallax-wrapper').style.marginTop = '-80vh';
    } else {
      document.getElementById('intercomp-parallax-wrapper').style.marginTop = '150vh';
    }
  }

}
