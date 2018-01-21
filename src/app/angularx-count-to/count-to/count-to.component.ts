import { Component, ElementRef, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter, HostBinding, Renderer2 } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'countTo',
  templateUrl: './count-to.component.html',
  styleUrls: ['./count-to.component.css']
})
export class CountToComponent implements OnInit, OnDestroy {

  @Input() from: any;
  @Input() to: any;
  @Input() duration: any;
  @Output() reset: any;
  num: number;
  private refreshInterval: number;
  private steps: number;
  private step: number;
  private increment: number;
  private timoutId: any;
  textContent: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.reset = new EventEmitter(true);
  }

  ngOnInit() {
    this.start();
  }

  restart(countTo: number, countFrom: number, duration: number) {
    this.to = countTo;
    this.from = countFrom;
    this.duration = duration;
    this.start();
  }

  calculate() {
    this.refreshInterval = 30;
    this.step = 0;
    this.timoutId = null;
    this.to = this.to || 0;
    this.from = this.from || 0;
    this.duration = ((this.duration) * 1000) || 0;
    this.steps = Math.ceil(this.duration / this.refreshInterval);
    this.increment = ((this.to - this.from) / this.steps);
    this.num = this.from;
  }

  tick() {
    this.timoutId = setTimeout(() => {
      this.num += this.increment;
      this.step++;
      if (this.step >= this.steps) {
        clearTimeout(this.timoutId);
        this.num = this.to;
        this.textContent = this.to;
      } else {
        this.textContent = Math.round(this.num);
        this.tick();
      }
    }, this.refreshInterval);
  }

  start() {
    setTimeout(() => {
      if (this.timoutId) {
        clearTimeout(this.timoutId);
      }
      this.calculate();
      this.tick();
    });
  }

  ngOnDestroy() {
    clearTimeout(this.timoutId);
  }

}
