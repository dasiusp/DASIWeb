import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebar = new EventEmitter();

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  emitToggleSidebar() {
    this.toggleSidebar.emit();
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 4300,
      verticalPosition: 'top',
      panelClass: ['light-snackbar']
    });
  }

}
