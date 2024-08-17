import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    })
  );

  it('should init the component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should add the numbers correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('')).toEqual(0);
    expect(app.add('1')).toEqual(1);
    expect(app.add('1,5')).toEqual(6);
  });
});
