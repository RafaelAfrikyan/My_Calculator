

export class Calculator {
  constructor(result, num) {
    this.result = result;
    this.num = num;
  }

  add(num) {
    if (num) {
      this.result += num;
    } else {
      return;
    }
  }
  sub(num) {
    if (num) {
      this.result -= num;
    } else {
      return;
    }
  }
  mult(num) {
    if (num) {
      this.result *= num;
    } else {
      return;
    }
  }
  div(num) {
    if (num) {
      this.result /= num;
    } else {
      return;
    }
  }
}
