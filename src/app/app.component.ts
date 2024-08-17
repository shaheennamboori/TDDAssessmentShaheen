import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /* This regex matches any newline character (\n) or comma (,). 
  Positive Case:
  Input: "apple,orange\nbanana"
  Negative Case:
  Input: "apple orange banana"*/
  private readonly Delimiters = /[\n,]/;

  // Add method
  public add(number: string): number {
    if (number.length <= 0) {
      return 0;
    }
    let numbers = number.split(this.Delimiters);

    return numbers.reduce(
      (accumulator, currentNumber) => (accumulator += parseInt(currentNumber)),
      0
    );
  }
}
