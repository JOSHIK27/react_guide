import { useState } from "react";

export default function StateSnapShot() {
  const [cnt, setCnt] = useState(0);
  const handleClick = () => {
    setCnt(cnt + 1);
    // as current cnt is 0, it sets cnt to 1 in the next render
    setCnt(cnt + 1);
    // as current cnt is 0, it sets cnt to 1 in the next render
    setCnt(cnt + 1);
    // as current cnt is 0, it sets cnt to 1 in the next render
    setCnt(cnt + 1);
    // as current cnt is 0, it sets cnt to 1 in the next render
    setCnt(cnt + 1);
    // as current cnt is 0, it sets cnt to 1 in the next render
  };
  return (
    <>
      <h1>{cnt}</h1>
      <button onClick={handleClick}>+5</button>
    </>
  );
}
