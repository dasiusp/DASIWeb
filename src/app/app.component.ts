import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  closeSidebar() {
    this.sidenav.close();
  }

  myScrollHandler(event) {
    document.getElementById('about-title').style.marginLeft = event.srcElement.scrollTop / 10 + 'vw';
    document.getElementById('events-title').style.marginLeft = -(event.srcElement.scrollTop / 10) + 'vw';
  }
}
