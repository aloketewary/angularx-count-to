# angularx-count-to
## version 1.0.4

The popular AngularJS based angular-count-to now counto for Angular 2+ including latest Angular 5.1.x release supported

## installing it from npm

```bash
npm install angularx-count-to --save
or try shortcut
npm i angularx-count-to -S
```

## Add to your app.module.ts


```bash

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// All other imports
...
// Add CounToModule
import { CountToModule } from 'angularx-count-to';

@NgModule({
  declarations: [
	AppComponent
    // All your declaration goes here
  ],
  imports: [
    // All your other imports goes here
	.......
	// Add CountToModule in imports
    CountToModule
  ],
  providers: [// All your declaration goes here],
  bootstrap: [AppComponent]
})

export class AppModule { }

```

## Add to your component html is easy

```bash

<countTo from="" duration="" to=""></countTo>
or
<countTo [from]="takeFromComponent" [duration]="takeDurationComponent" [to]="takeToComponent"></countTo>
or
you can add within any html tags

<h1 countTo [from]="takeFromComponent" [duration]="takeDurationComponent" [to]="takeToComponent"></h1>

```

## Licence
MIT
