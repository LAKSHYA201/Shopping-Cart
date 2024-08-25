import bag from "../assets/shoppingBag.svg";
export default function Nav() {
  return (
    <>
      <div className="mainHeading">
        <div className="companyName">
          <h1>Luxa</h1>
        </div>
        <div>
          <img src={bag} className="bag"></img>
        </div>
      </div>
    </>
  );
}
