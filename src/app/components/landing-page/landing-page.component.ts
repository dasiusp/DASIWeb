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
    const offsetY = window.pageYOffset;
    document.getElementById('about-title').style.marginLeft = (47.5 + offsetY * 0.025).toString() + 'vw';
    document.getElementById('events-title').style.marginLeft = (62.5 + offsetY * -0.03).toString() + 'vw';
    if (window.pageYOffset > 3800) {
      document.getElementById('intercomp-parallax-wrapper').style.marginTop = '-80vh';
    } else {
      document.getElementById('intercomp-parallax-wrapper').style.marginTop = '150vh';
    }
  }

}
