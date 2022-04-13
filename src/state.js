export class Calculator {
  constructor(result) {
    this.result = result;
  }

  add(num) {
    this.result += num;
  }
  sub(num) {
    this.result -= num;
  }
  mult(num) {
    this.result *= num;
  }
  div(num) {
    this.result /= num;
  }
}
