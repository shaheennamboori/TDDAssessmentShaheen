import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Add method
  public add(number: string): number {
    if (number.length <= 0) {
      return 0;
    }
    let numbers = number.split(',');

    return numbers.reduce(
      (accumulator, currentNumber) => (accumulator += parseInt(currentNumber)),
      0
    );
  }
}
