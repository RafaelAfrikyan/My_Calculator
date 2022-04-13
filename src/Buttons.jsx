import React, { useState } from "react";
import { Calculator } from "./state";

export default function Buttons() {
  const [value, setValue] = useState(0);

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
      <div class="buttons">
        <div
          onClick={() => {
            setValue(0);
          }}
          className="button_first"
        >
          AC
        </div>
        <div onClick={handleOne} className="button_first">
          /
        </div>
        <div onClick={handleOne} className="button_first">
          *
        </div>
        <div className="button_yellow">&larr;</div>
        <div onClick={handleOne} className="button">
          7
        </div>
        <div onClick={handleOne} className="button">
          8
        </div>
        <div onClick={handleOne} className="button">
          9
        </div>
        <div onClick={handleOne} className="button_yellow">
          -
        </div>
        <div onClick={handleOne} className="button">
          4
        </div>
        <div onClick={handleOne} className="button">
          5
        </div>
        <div onClick={handleOne} className="button">
          6
        </div>
        <div onClick={handleOne} className="button_yellow">
          +
        </div>
        <div onClick={handleOne} className="button">
          1
        </div>
        <div onClick={handleOne} className="button">
          2
        </div>
        <div onClick={handleOne} className="button">
          3
        </div>
        <div onClick={handleOne} className="button_yellow">
          .
        </div>
        <div onClick={handleOne} className="button">
          (
        </div>
        <div onClick={handleOne} className="button">
          0
        </div>
        <div onClick={handleOne} className="button">
          )
        </div>
        <div onClick={equal} className="button_yellow">
          =
        </div>
      </div>
    </div>
  );
}
