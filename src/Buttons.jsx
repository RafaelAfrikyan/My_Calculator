import React, { useState } from "react";
import { Calculator } from "./state";

export default function Buttons() {
  const [value, setValue] = useState(0);
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

  function handleOne(e) {
    if (value == 0) {
      setValue(e.target.innerText);
    } else {
      setValue(`${value}${e.target.innerText}`);
    }
  }

  function equal() {
    setValue(eval(value));
  }

  return (
    <div>
      <input className="display" type="text" value={value}></input>
      <div className="buttons">
        <div
          onClick={() => {
            setValue(0);
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
              <div onClick={handleOne} className="button">
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
