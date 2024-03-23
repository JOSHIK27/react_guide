import { Outlet, useOutletContext } from "react-router-dom";
export default function AA() {
  const context = useOutletContext();
  return (
    <>
      <h1>I am AA and the context is {context}</h1>
    </>
  );
}
