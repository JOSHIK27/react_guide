import { useState } from "react";

export default function LiftingUpTheState() {
  // this state is passed down the props (we have lifted the state to point from where we can pass to all the children who need it)
  const [cnt, setCnt] = useState(0);
  return (
    <>
      <h1>{cnt}</h1>
      <Child1 cnt={cnt} setCnt={setCnt} />
      <Child2 cnt={cnt} setCnt={setCnt} />
    </>
  );
}

function Child1({ cnt, setCnt }) {
  return <button onClick={() => setCnt(cnt + 1)}>+1</button>;
}
function Child2({ cnt, setCnt }) {
  return (
    <>
      <button onClick={() => setCnt(cnt + 2)}>+2</button>
      <Child3 cnt={cnt} setCnt={setCnt} />
      <Child4 cnt={cnt} setCnt={setCnt} />
    </>
  );
}

function Child3({ cnt, setCnt }) {
  return <button onClick={() => setCnt(cnt + 3)}>+3</button>;
}
function Child4({ cnt, setCnt }) {
  return <button onClick={() => setCnt(cnt + 4)}>+4</button>;
}
