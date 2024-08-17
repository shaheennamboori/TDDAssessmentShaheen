import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /* 
Positive Case:
Input: "// \n1 2 3"
- The delimiter is a whitespace character .

Negative Case:
Input: "//\/////\n2\n3\n4"
- The regex captures the delimiter incorrectly.
*/
  private readonly DelimiterIdentifier = /^\/\/(.|\s*)\n/;

  // Add method
  public add(number: string): number {
    // Extract the numbers from the input
    let numbers = this.extractDelimitersAndNumbers(number);
    if (numbers.length <= 0) {
      return 0;
    }

    return numbers.reduce(
      (accumulator, currentNumber) => (accumulator += currentNumber),
      0
    );
  }

  private extractDelimitersAndNumbers(input: string): number[] {
    let expression = input.match(this.DelimiterIdentifier);
    if (expression) {
      // Remove the delimiter part from the input
      const numbersString = input.replace(this.DelimiterIdentifier, '');

      // Check for new line delimiter
      if (expression[1] === '') {
        return numbersString.split('\n').map(Number);
      }
      return numbersString.split(expression[1]).map(Number);
    }

    return [];
  }
}
