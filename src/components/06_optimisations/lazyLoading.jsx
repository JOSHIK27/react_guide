import { useState } from "react";

// for functions

export default function LazyLoading() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [val, setVal] = useState(0);
  return (
    <>
      <h1>{val}</h1>
      <input
        onChange={(e) => setNum1(parseInt(e.target.value))}
        placeholder="first number"
      ></input>
      <input
        onChange={(e) => setNum2(parseInt(e.target.value))}
        placeholder="second number"
      ></input>
      <button
        onClick={() => {
          // look source/page in dev tools, initially it would be just this component, the moment you click on add, you will see utils.js being imported. This is called dynamic importing
          import("../../utils/maths.js").then((data) => {
            setVal(data.sum(num1, num2));
          });
        }}
      >
        Add
      </button>
    </>
  );
}
