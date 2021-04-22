import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarComponent } from "../snackbar/snackbar.component";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.sass"],
})
export class FooterComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 4300,
      verticalPosition: "top",
      panelClass: ["light-snackbar"],
    });
  }

  ngOnInit() {}
}
