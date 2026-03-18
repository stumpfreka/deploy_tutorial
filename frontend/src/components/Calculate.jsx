import { useState } from "react";

const Calculate = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [operator, setOperator] = useState("");
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (operator === "+") {
      setResult(Number(firstNumber) + Number(secondNumber));
    }
    if (operator === "-") {
      setResult(firstNumber - secondNumber);
    }
    if (operator === "*") {
      setResult(firstNumber * secondNumber);
    }
    if (operator === "/") {
      setResult(firstNumber / secondNumber);
    }
    if (operator === "%") {
      setResult(firstNumber % secondNumber);
    }
  };

  return (
    <div className="border h-30 w-auto p-4 flex items-center gap-4">
      <label>First number</label>
      <input
        value={firstNumber}
        type="number"
        className="border bg-white px-2"
        onChange={(e) => setFirstNumber(e.target.value)}
      />
      <label></label>
      <select
        value={operator}
        name=""
        id=""
        className="border p-1"
        onChange={(e) => setOperator(e.target.value)}
      >
        <option value={"+"}>+</option>
        <option value={"-"}>-</option>
        <option value={"*"}>*</option>
        <option value={"/"}>/</option>
        <option value={"%"}>%</option>
      </select>
      <label>Second number</label>
      <input
        value={secondNumber}
        type="number"
        className="border bg-white px-2"
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      <button
        onClick={calculate}
        className="border text-lg bg-blue-500 rounded full text-white font-medium px-3 py-2 hover:bg-blue-700"
      >
        Calculate
      </button>
      {result !== null && <p>Result is: {result}</p>}
    </div>
  );
};

export default Calculate;
