import { CountToComponent } from './count-to.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TestComponent', () => {
  let component: CountToComponent;
  let fixture: ComponentFixture<CountToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
