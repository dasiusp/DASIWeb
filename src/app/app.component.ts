import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  parallaxRatio = 0.1;

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  constructor(private snackBar: MatSnackBar) {

  }

  closeSidebar() {
    this.sidenav.close();
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 4300,
      verticalPosition: 'top',
      panelClass: ['light-snackbar']
    });
  }

  myScrollHandler(event) {
    if (window.innerWidth < 450) {
      document.getElementById('about-title').style.marginLeft = - event.srcElement.scrollTop / 20 + 'vw';
      document.getElementById('events-title').style.marginLeft = 5 - (event.srcElement.scrollTop / 20) + 'vw';
      document.getElementById('intercomp-title').style.marginLeft = - 14 + event.srcElement.scrollTop / 20 + 'vw';
    } else {
      document.getElementById('about-title').style.marginLeft = event.srcElement.scrollTop / 30 + 'vw';
      document.getElementById('events-title').style.marginLeft = - 32 - (event.srcElement.scrollTop / 30) + 'vw';
      document.getElementById('intercomp-title').style.marginLeft = 188 + event.srcElement.scrollTop / 30 + 'vw';
    }
    document.getElementById('events-parallax').style.backgroundPositionY = - (event.srcElement.scrollTop * this.parallaxRatio) + 'px';
    document.getElementById('intercomp-parallax').style.backgroundPositionY = - 500 - (event.srcElement.scrollTop * this.parallaxRatio) + 'px';
  }
}
