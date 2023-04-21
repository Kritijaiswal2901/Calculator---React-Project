import React, { useState } from "react";
import { Container, Screen, Prevoius, Current, Button } from "../styles/Main";

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [prevoius, setPrevoius] = useState("");
  const [operations, setOperations] = useState("");

  const appendValue = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const deleteD = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const allclear = () => {
    setCurrent("");
    setOperations("");
    setPrevoius("");
  };

  const chooseOperation = (el) => {
    if (current === "") return;
    if (prevoius !== "") {
      let value = compute();
      setPrevoius(value);
    } else {
      setPrevoius(current);
    }
    setCurrent("");
    setOperations(el.target.getAttribute("data"));
  };

  const equal = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevoius("");
    setOperations("");
  };
  const compute = () => {
    let result;
    let previousNum = parseFloat(prevoius);
    let currentNum = parseFloat(current);
    if (isNaN(previousNum) || isNaN(currentNum)) return;
    switch (operations) {
      case "÷":
        result = previousNum / currentNum;
        break;
      case "x":
        result = previousNum * currentNum;
        break;
      case "+":
        result = previousNum + currentNum;
        break;
      case "-":
        result = previousNum - currentNum;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <>
      <Container>
        <Screen>
          <Prevoius>
            {prevoius} {operations}
          </Prevoius>
          <Current>{current}</Current>
        </Screen>
        <Button gridSpan={2} control onClick={allclear}>
          AC
        </Button>
        <Button  del onClick={deleteD}>DEL</Button>
        <Button data={"÷"} onClick={chooseOperation} operation>
          ÷
        </Button>
        <Button data={7} onClick={appendValue}>
          7
        </Button>
        <Button data={8} onClick={appendValue}>
          8
        </Button>
        <Button data={9} onClick={appendValue}>
          {" "}
          9
        </Button>
        <Button data={"x"} operation onClick={chooseOperation}>
          x
        </Button>
        <Button data={4} onClick={appendValue}>
          4
        </Button>
        <Button data={5} onClick={appendValue}>
          5
        </Button>
        <Button data={6} onClick={appendValue}>
          6
        </Button>
        <Button data={"+"} operation onClick={chooseOperation}>
          +
        </Button>
        <Button data={1} onClick={appendValue}>
          1
        </Button>
        <Button data={2} onClick={appendValue}>
          2
        </Button>
        <Button data={3} onClick={appendValue}>
          3
        </Button>
        <Button data={"-"} operation onClick={chooseOperation}>
          -
        </Button>
        <Button data={"."} onClick={appendValue} decimal>
          .
        </Button>
        <Button data={0} onClick={appendValue}>
          0
        </Button>
        <Button gridSpan={2} equals onClick={equal}>
          =
        </Button>
      </Container>
    </>
  );
};

export default Calculator;
