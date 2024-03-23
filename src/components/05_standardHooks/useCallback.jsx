import { useCallback, useState } from "react";

export default function UseCallbackExample() {
  const [color, setColor] = useState("red");
  const [num, setNum] = useState(0);
  // each time, input field is manipulated, this function is re created which is not necessary. Instead we can cache this func with required dependencies
  const handleColor = useCallback(
    () => setColor(color == "red" ? "blue" : "red"),
    [color]
  );
  const handleNumber = useCallback((e) => setNum(parseInt(e.target.value)), []);
  // each time we toggle theme, all the functions are re created again. This can be solved by caching the function by adding dependecies like below
  const numTable = useCallback(() => {
    let ans = [];
    for (let i = 1; i <= 10; i++) {
      ans.push(num * i);
    }
    return ans;
  }, [num]);
  return (
    <>
      <button onClick={handleColor}>Toggle theme to {color}</button>
      <div style={{ backgroundColor: color, padding: 20 }}>
        <input onChange={(e) => handleNumber(e)}></input>
        {numTable().map((item) => (
          <h5>{item}</h5>
        ))}
      </div>
    </>
  );
}
