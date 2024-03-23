import { createContext, useContext, useState } from "react";
const theme = createContext(null);
export default function UseContextExample() {
  const [color, setColor] = useState("red");
  const handleClick = () => {
    setColor(color == "red" ? "blue" : "red");
  };
  return (
    <>
      <theme.Provider value={color}>
        <button onClick={handleClick}>Change Color</button>
        <Child />
      </theme.Provider>
    </>
  );
}

function Child() {
  const themeValue = useContext(theme);
  console.log(themeValue);
  return <div style={{ backgroundColor: themeValue }}>This is a DIV</div>;
}
