import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <h1>Luxa Shopping</h1>
      <div className="navBarInternals">
        <h2 id="home">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <div id="home">Home</div>
          </Link>
        </h2>
        <h2>
          <Link to="/shop" style={{ textDecoration: "none", color: "white" }}>
            Shop
          </Link>
        </h2>
        <h2>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            Cart
          </Link>
        </h2>
      </div>
    </>
  );
}
