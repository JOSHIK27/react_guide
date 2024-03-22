import { useContext, useState } from "react";
import { sample } from "../../context/sample";
export default function ViaContext() {
  const [color, setColor] = useState("red");
  return (
    <sample.Provider value={color}>
      <button onClick={() => setColor("blue")}>Change color to blue</button>
      <button onClick={() => setColor("red")}>Change color to red</button>
      <Child />
    </sample.Provider>
  );
}

function Child() {
  const color = useContext(sample);
  return <div style={{ backgroundColor: color }}>This is a div</div>;
}
