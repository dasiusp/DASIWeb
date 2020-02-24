import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitToggleSidebar() {
    this.toggleSidebar.emit();
  }

}
