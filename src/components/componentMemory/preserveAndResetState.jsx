import { useState } from "react";
export default function PreserveAndResetState() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      {/* the moment controller is erased from  ui tree, the state is destroyed */}
      {display && <Controller />}
      <input onClick={() => setDisplay(!display)} type="checkbox" />
    </>
  );
}

function Controller() {
  const [cnt, setCnt] = useState(0);
  return (
    <>
      <h1>{cnt}</h1>
      <button onClick={() => setCnt(cnt + 1)}>Increment</button>
    </>
  );
}
