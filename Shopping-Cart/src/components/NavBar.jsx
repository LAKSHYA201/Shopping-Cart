import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <h1>Luxa Shopping</h1>
      <div className="navBarInternals">
        <h2>
          <Link to="/home">Home</Link>
        </h2>
        <h2>
          <Link to="/shop">Shop</Link>
        </h2>
        <h2>
          <Link to="/cart">Cart</Link>
        </h2>
      </div>
    </>
  );
}
