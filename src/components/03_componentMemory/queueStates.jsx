import { useState } from "react";

export default function QueueState() {
  const [cnt, setCnt] = useState(0);
  const handleClick = () => {
    // this updates the state based on the state which is in queue not the current state of the component
    // this is helpful if u wanna update same state multiple times before the next render
    setCnt((prev) => prev + 1);
    // prev = 1 will be stored in the queue
    setCnt((prev) => prev + 1);
    // prev = 1 + 1 will be stored in the queue
    setCnt((prev) => prev + 1);
    //prev = 2 + 1 will be stored in the queue
  };

  return (
    <>
      <h1>{cnt}</h1>
      <button onClick={handleClick}>+3</button>
    </>
  );
}
