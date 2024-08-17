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
    let negativeNumbers: number[] = [];
    let sum = 0;
    numbers.forEach((number) => {
      if (number < 0) {
        negativeNumbers.push(number);
      }
      sum += number;
    });
    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(',')}`
      );
    }
    return sum;
  }

  private extractDelimitersAndNumbers(input: string): number[] {
    // Extract delimiter from the input string
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
