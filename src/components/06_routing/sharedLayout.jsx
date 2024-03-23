import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SharedLayout() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ backgroundColor: "red" }}>Odd Looking NAV BAR</div>
      <ul>
        <li>
          <Link to={"/a"}>a</Link>
        </li>
        <li>
          <Link to={"/a/aa"}>aa</Link>
        </li>
        <li>
          <Link to={"/a/ab"}>ab</Link>
        </li>
        <li onClick={() => navigate(-1)}>go one page back in history</li>
        <li onClick={() => navigate(1)}>go one page forward in history</li>
      </ul>
      <Outlet context={"Testing"} />
    </>
  );
}
