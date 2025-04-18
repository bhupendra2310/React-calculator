import React from "react";
import styles from "./Calculator.module.css";
import { useState } from "react";
const Calculator = () => {
  let buttonList = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
    "0",
    ".",
    "=",
    "-",
  ];

  const [calVal, setCalVal] = useState("");
  const OnButtonCLicked = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result.toString());
    } else {
      const newButtoText = calVal + buttonText;
      setCalVal(newButtoText);
    }
  };
  return (
    <div className={styles.calculator}>
      <input
        className={styles.display}
        value={calVal}
        readOnly
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            setCalVal("");
          }
        }}
      />

      <div className={styles.buttonContainer}>
        {buttonList.map((buttonNames, index) => (
          <button
            key={index}
            className={styles.button}
            onClick={() => {
              OnButtonCLicked(buttonNames);
            }}
          >
            {buttonNames}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
