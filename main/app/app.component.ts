import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  countTo: number;
  countFrom: number;
  duration: number;
  cTo: number;
  cFrom: number;
  cDur: number;

  constructor() {
    this.countTo = 1500;
    this.countFrom = 1;
    this.duration = 4;
  }

  ngOnInit() {
    this.cTo = this.countTo;
    this.cFrom = this.countFrom;
    this.cDur = this.duration;
  }

  reCount() {
    this.cFrom = Math.ceil(Math.random() * 300);
    this.cTo = Math.ceil(Math.random() * 7000) - Math.ceil(Math.random() * 600);
    this.cDur = Math.ceil(Math.random() * 10);
    // restart(_countTo, _countFrom, _duration);
  }
}
