import React, { useState, useEffect } from "react";
import PointTarget from "react-point";
import styled from "styled-components";
import _ from "underscore";

const CalKeyButton = styled.button`
  width: 4.2rem;
  height: 4.2rem;
  margin: 0.4rem;
  text-align: center;
  font-size: 150%;
  border-radius: 0.8rem;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem grey;
`;

const CalculatorFrame = styled.div`
  width: 21rem;
  height: 30rem;
  background-color: lightcyan;
  display: grid;
  padding: 1%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border: ridge;
`;

const CalculatorInput = styled.div`
  border-color: black;
  border: ridge;
  text-align: right;
  padding-right: 10%;
  font-weight: bold;
  font-size: xx-large;

  .result {
    min-height: 3rem;
    color: #666666;
  }
`;

const Calculatorkeypad = styled.div`
  padding-top: 0.3rem;
  background-color: lightblue;
  display: grid;
  grid-template-columns: repeat(4, 5rem);
  grid-template-rows: repeat(5, 5rem);
  grid-template-areas: "keys-function keys-function keys-function keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators";
  .keys-numbers {
    grid-area: keys-numbers;
    direction: rtl;
  }

  .keys-numbers .key-zero {
    width: 9.1rem;
    text-align: left;
    padding-left: 15%;
  }
  .keys-operators {
    grid-area: keys-operators;
  }
  .keys-function {
    grid-area: keys-function;
  }
`;

function CalculatorKey(props) {
  return (
    <CalKeyButton
      className={`${props.className}`}
      onClick={() => props.onClick(props.keyValue)}
    >
      {props.keyValue}{" "}
    </CalKeyButton>
  );
}

const Calculator = () => {
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);

  useEffect(() => {}, [op, nextValue, prevValue]);

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };
  const percentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === "") {
      setPrevValue(parseFloat(prevValue) / 100);
    }
  };
  const changeSign = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };
  const clearData = () => {
    setNextValue("0");
    setPrevValue(0);
  };

  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue("");
      }
      if (op) {
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === "c") {
      clearData();
    } else if (value === "\xB1") {
      changeSign();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percentage();
    }
  };

  return (
    <React.Fragment>
      <CalculatorFrame>
        <CalculatorInput>
          <div className="result">{nextValue} </div>
        </CalculatorInput>
        <Calculatorkeypad>
          <div className="keys-function">
            <CalculatorKey keyValue={"c"} onClick={handleOperation} />
            <CalculatorKey keyValue={"\xB1"} onClick={handleOperation} />
            <CalculatorKey keyValue={"%"} onClick={handleOperation} />
          </div>
          <div className="keys-operators">
            <CalculatorKey keyValue={"+"} onClick={handleOperation} />
            <CalculatorKey keyValue={"-"} onClick={handleOperation} />
            <CalculatorKey keyValue={"*"} onClick={handleOperation} />
            <CalculatorKey keyValue={"/"} onClick={handleOperation} />
            <CalculatorKey keyValue={"="} onClick={handleOperation} />
          </div>
          <div className="keys-numbers">
            <CalculatorKey keyValue={9} onClick={handleOperation} />
            <CalculatorKey keyValue={8} onClick={handleOperation} />
            <CalculatorKey keyValue={7} onClick={handleOperation} />
            <CalculatorKey keyValue={6} onClick={handleOperation} />
            <CalculatorKey keyValue={5} onClick={handleOperation} />
            <CalculatorKey keyValue={4} onClick={handleOperation} />
            <CalculatorKey keyValue={3} onClick={handleOperation} />
            <CalculatorKey keyValue={2} onClick={handleOperation} />
            <CalculatorKey keyValue={1} onClick={handleOperation} />
            <CalculatorKey
              className="key-dot"
              keyValue={"."}
              onClick={handleOperation}
            />
            <CalculatorKey
              className="key-zero"
              keyValue={0}
              onClick={handleOperation}
            />
          </div>
        </Calculatorkeypad>
      </CalculatorFrame>
    </React.Fragment>
  );
};

export default Calculator;
