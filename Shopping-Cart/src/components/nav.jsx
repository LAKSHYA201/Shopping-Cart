import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import bag from "../assets/shoppingBag.svg";
export default function Nav({ noOfItems }) {
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
            {noOfItems}
          </button>
        </div>
      </div>
    </>
  );
}
Nav.propTypes = {
  noOfItems: PropTypes.number.isRequired,
};
