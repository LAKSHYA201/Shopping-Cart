import { useNavigate } from "react-router-dom";
import bag from "../assets/shoppingBag.svg";
export default function Nav() {
  const navigate = useNavigate();

  return (
    <>
      <div className="mainHeading">
        <div className="companyName">
          <h1
            onClick={() => {
              navigate("/home");
            }}
          >
            Luxa
          </h1>
        </div>
        <div className="cartIconHolder">
          <img
            src={bag}
            className="bag"
            onClick={() => {
              navigate("/cart");
            }}
          ></img>
        </div>
        <div className="itemsCountHolder">
          <button
            className="itemsCount"
            onClick={() => {
              navigate("/cart");
            }}
          >
            100
          </button>
        </div>
      </div>
    </>
  );
}
