import { useState } from "react";

export default function State() {
  const [cnt, setCnt] = useState(0);
  const handleIncrement = () => setCnt(cnt + 1);
  return (
    <>
      <h1>{cnt}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}
