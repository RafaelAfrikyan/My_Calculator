import React, { useState } from "react";
import { Calculator } from "./state";

export default function Buttons() {
  const blt = new Calculator(0);
  const [value, setValue] = useState(0);
  const [calcValue, setCalcValue] = useState(blt);
  const [sign, setSign] = useState("");
  const [arr, setArr] = useState([
    "/",
    "*",
    "%",
    7,
    8,
    9,
    "-",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    ".",
    "(",
    0,
    ")",
  ]);

  function calc(e) {
    if (blt.result === 0) {
      blt.num = +e.target.innerText;
      setCalcValue({
        result: blt.num,
      });
    }

    if (value === 0) {
      setValue(e.target.innerText);
    } else {
      setValue(`${value}${e.target.innerText}`);
    }

    if (sign === "+") {
      return setCalcValue({
        result: calcValue.result + blt.num,
        num: calcValue.result + blt.num,
      });
    }

    if (sign === "-") {
      return setCalcValue({
        result: calcValue.result - blt.num,
        num: calcValue.num,
      });
    }
    if (sign === "*") {
      return setCalcValue({
        result: calcValue.result * blt.num,
        num: calcValue.num,
      });
    }

    if (sign === "/") {
      return setCalcValue({
        result: calcValue.result / blt.num,
        num: calcValue.num,
      });
    }
  }

  function handleOne(e) {
    if (e.target.innerText === "+") {
      setSign("+");
      blt.add(calcValue.num);
    }
    if (e.target.innerText === "-") {
      setSign("-");
      blt.sub(calcValue.num);
    }

    if (e.target.innerText === "*") {
      setSign("*");
      blt.mult(calcValue.num);
    }
    if (e.target.innerText === "/") {
      setSign("/");
      blt.div(calcValue.num);
    }

    if (value === 0) {
      setValue(e.target.innerText);
    } else {
      setValue(`${value}${e.target.innerText}`);
    }
  }

  console.log(calcValue);

  function equal() {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Erorr");
    }

    setCalcValue({
      result: +calcValue.result,
      num: +calcValue.result,
    });
  }

  return (
    <div>
      <input className="display" type="text" value={value}></input>
      <div className="buttons">
        <div
          onClick={() => {
            setValue(0);
            setCalcValue({
              result: 0,
              num: 0,
            });
          }}
          className="button_first"
        >
          AC
        </div>

        {arr.map((el) => {
          if (el === "*" || el === "/") {
            return (
              <div onClick={handleOne} className="button_first">
                {el}
              </div>
            );
          }
          if (el === "." || el === "-" || el === "+" || el === "%") {
            return (
              <div onClick={handleOne} className="button_yellow">
                {el}
              </div>
            );
          } else
            return (
              <div onClick={calc} className="button">
                {el}
              </div>
            );
        })}

        <div onClick={equal} className="button_yellow">
          =
        </div>
      </div>
    </div>
  );
}
