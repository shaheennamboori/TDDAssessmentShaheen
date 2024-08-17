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
    expect(app.add('//;\n1')).toEqual(1);
    expect(app.add('//,\n1,5')).toEqual(6);
  });

  it('should add the numbers correctly when different delimiters are passed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('//\n\n1\n2\n3')).toEqual(6);
    expect(app.add('//,\n1,2,3')).toEqual(6);
    expect(app.add('// \n1 2 3')).toEqual(6);
    expect(app.add('//.\n1.2.3')).toEqual(6);
  });

  it('should throw error when negative numbers are passed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    try {
      app.add('//,\n-1,2,3');
    } catch (e: any) {
      expect(e.message).toEqual('negative numbers not allowed -1');
    }
  });
});
