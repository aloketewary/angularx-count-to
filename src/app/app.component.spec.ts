import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ComponentDef } from '@angular/core/src/render3';

let app: AppComponent;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Angularx Count To'`, async(() => {
    expect(app.title).toEqual('Angularx Count To');
  }));
});
