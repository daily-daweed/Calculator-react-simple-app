import React, { useState } from "react";
// main css !!
import "./App.css";
// main function
function App() {
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([]);
  // this function for update all array of numbers and operators!
  const handleClick = value => {
    setDisplay(value);
    setExpression([...expression, value]);
  };
  // this function for clear all array of numbers and operators!
  const clearscreen = () => {
    setExpression("");
    setDisplay("");
  };
  // this function for Calculate all array of numbers and operators!
  const handleResult = () => {
    const result = expression
      .join("")
      .split(/(\D)/g)
      .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        if(acc == 0 && value == "÷"){
          return "error for this expression";
        }
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
    setDisplay(result);
    setExpression("");
  };
  // this for return all html of calculatior!
  return (
    <div className="App">
      <h3 className="display">{expression}</h3>
      
      <span className="expression">{display}</span>

      <section className="panel">
        <section className="numbers">
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>

          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>

          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>

          <button onClick={() => handleClick(0)}>0</button>
        </section>

        <section className="operators">
        <button onClick={() => clearscreen()}>C</button>
          <button onClick={() => handleClick("÷")}>÷</button>
          <button onClick={() => handleClick("x")}>x</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleResult()}>=</button>
          
        </section>
      </section>
    </div>
  );
}

export default App;
