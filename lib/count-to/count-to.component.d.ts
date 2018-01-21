import { ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
export declare class CountToComponent implements OnInit, OnDestroy {
    private el;
    private renderer;
    from: any;
    to: any;
    duration: any;
    reset: any;
    num: number;
    private refreshInterval;
    private steps;
    private step;
    private increment;
    private timoutId;
    textContent: any;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    restart(countTo: number, countFrom: number, duration: number): void;
    calculate(): void;
    tick(): void;
    start(): void;
    ngOnDestroy(): void;
}
