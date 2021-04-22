import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarComponent } from "./components/snackbar/snackbar.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  parallaxRatio = 0.1;

  @ViewChild("sidenav") sidenav: MatSidenav;

  constructor(private snackBar: MatSnackBar) {}

  closeSidebar() {
    this.sidenav.close();
  }

  openSidebar() {
    this.sidenav.open();
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 4300,
      verticalPosition: "top",
      panelClass: ["light-snackbar"],
    });
  }

  redirectTo(url) {
    window.location.href = url;
  }

  myScrollHandler(event) {
    const scrollHeight = event.srcElement.scrollHeight;
    const scrollTop = event.srcElement.scrollTop;
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    const perc =
      50 +
      ((scrollHeight - scrollTop - innerHeight) * 50) /
        -(scrollHeight - innerHeight);

    if (innerWidth > 700) {
      document.getElementById("about-title").style.marginLeft =
        70 - perc + "vw";
      document.getElementById("events-title").style.marginLeft =
        7 + perc + "vw";
      document.getElementById("intercomp-title").style.marginLeft =
        21.5 + perc + "vw";
      document.getElementById("events-parallax").style.backgroundPositionY =
        -7.5 - perc * this.parallaxRatio + "rem";
      document.getElementById("intercomp-parallax").style.backgroundPositionY =
        -76 - perc * this.parallaxRatio + "rem";
    } else {
      document.getElementById("about-title").style.marginLeft = -perc + "vw";
      document.getElementById("events-title").style.marginLeft =
        -8 + perc + "vw";
      document.getElementById("intercomp-title").style.marginLeft =
        -40 + perc + "vw";
      document.getElementById("events-parallax").style.backgroundPositionY =
        -7.5 - perc * this.parallaxRatio + "rem";
      document.getElementById("intercomp-parallax").style.backgroundPositionY =
        -40 - perc * this.parallaxRatio + "rem";
    }
  }
}
