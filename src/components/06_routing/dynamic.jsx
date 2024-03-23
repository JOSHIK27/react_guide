import { useParams } from "react-router-dom";

export default function Dynamic() {
  const { num } = useParams();
  return <h1>This is a dynamic route with number : {num}</h1>;
}
