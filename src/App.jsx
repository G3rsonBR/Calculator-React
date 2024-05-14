import { useState } from "react";
import Button from "./Components/Button";
import "./App.css";

export default function App() {
  const elements = [
    "C",
    "CE",
    "^2",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    "( - )",
    0,
    ".",
    "=",
  ];

  const [value, setValue] = useState("");

  function handleClick(e) {
    const btnValue = e.target.textContent;
  
    if (btnValue === "C") {
      setValue("");
      return;
    }
    if (btnValue === "CE") {
      setValue(value.slice(0, -1));
      return;
    }
    if (btnValue === "=") {
      let userInput = value;
      let result = Function("return " + userInput)();
      setValue(result.toString());
      return;
    }
    if (btnValue === "( - )") {
      setValue("-" + value);
      return;
    }
    if (btnValue === "^2") {
      setValue(Math.pow(value, 2).toString());
      return;
    }

    if (btnValue === "/" || btnValue === "*" || btnValue === "+" || btnValue === "-") {
      setValue(value + ` ${btnValue} `);
      return;
    }

    setValue(value + btnValue);
  }

  return (
    <>
      <div className="container">
        <div className="inputs">
          <input
            type="text"
            className="input input-display"
            disabled
            value={value}
          />
        </div>
        <div className="keypad">
          {elements.map((element, index) => (
            <Button key={index} onClick={handleClick} className="button">
              {element}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
