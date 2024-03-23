import { useOutletContext } from "react-router-dom";
export default function AB() {
  const context = useOutletContext();
  return (
    <>
      <h1>I am AB and the context is {context}</h1>
    </>
  );
}
