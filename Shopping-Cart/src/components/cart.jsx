import { useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export default function Cart() {
  const { addedIntoCartPrice, addedIntoCartURL } = useOutletContext();
  return (
    <>
      <div className="cartPage">
        <h1 style={{ marginLeft: "5%" }}>Cart</h1>

        {addedIntoCartURL.map((url, index) => (
          <div className="cartItem" key={uuidv4()}>
            {""}
            <img src={url} />
            <div className="cartItemDetails">
              <h2>${addedIntoCartPrice[index]}</h2>
              <button>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
