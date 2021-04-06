import { Component, OnInit } from '@angular/core';
import { SectorsService } from '../../services/sectors.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.page.html',
  styleUrls: ['./sectors.page.sass']
})
export class SectorsPage implements OnInit {
  members = {};
  pageLoading = true;

  constructor(private sectorsService: SectorsService) { }

  getYears() {
    return Object.keys(this.members);
  }

  getSectors(year) {
    return Object.keys(this.members[year]);
  }

  ngOnInit(): void {
    this.pageLoading = true
    this.sectorsService.getMembers()
      .subscribe(
        (res) => this.members = res,
        (err) => console.log(err),
        () => this.pageLoading = false
      );
  }

}
