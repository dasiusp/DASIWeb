import { MatSnackBarRef } from "@angular/material/snack-bar";
import { Component } from "@angular/core";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styles: [
    `
      .text {
        color: #e34040;
      }
    `,
  ],
})
export class SnackbarComponent {
  constructor(public snackBarRef: MatSnackBarRef<SnackbarComponent>) {}

  closeSnackBarMensagem() {
    this.snackBarRef.dismiss();
  }
}
