import { useOutletContext } from "react-router-dom";
export default function Cart() {
  const {
    setAddedIntoCartPrice,
    setAddedIntoCartURL,
    addedIntoCartPrice,
    addedIntoCartURL,
  } = useOutletContext();
  return (
    <>
      <div className="cartPage">
        <h1 style={{ marginLeft: "5%" }}>Cart</h1>

        {addedIntoCartURL.map((url) => (
          <div className="cartItem" key={url}>
            {" "}
            {/* Added key attribute */}
            <img src={url} /> {/* Added closing tag for img */}
            <div className="cartItemDetails">
              <h2>4.99$</h2>
              <button>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
