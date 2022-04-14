export class Calculator {
  constructor(num) {
    this.result = 0;
    this.num = 0;
  }

  add(num) {
    return (this.result += num);
  }

  sub(num) {
    if (this.result === 0) {
      return (this.result = num);
    } else return (this.result -= num);
  }

  mult(num) {
    if (this.result) {
      return (this.result *= num);
    } else {
      this.result = 1;
      return (this.result *= num);
    }
  }

  div(num) {
    if (this.result) {
      return (this.result /= num);
    }
  }
}
