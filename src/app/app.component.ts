import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CareerPortal';
  opened = false;
  tabs = [];
  ngOnInit() {
    this.tabs = [
      'Personal Information',
      'Experiance',
      'Educational Information',
      'Attachements'
    ];
  }
  toggleNav() {
    console.log('toggle triggereed');

    this.opened = !this.opened;
  }
}
