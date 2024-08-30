import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Nav from "./components/nav";

function App() {
  const [noOfAddedItems, setNoOfAddedItems] = useState(0);
  const [addedIntoCartURL, setAddedIntoCartURL] = useState([]);
  const [addedIntoCartPrice, setAddedIntoCartPrice] = useState([]);
  const contextValue = {
    setAddedIntoCartPrice,
    setAddedIntoCartURL,
    addedIntoCartPrice,
    addedIntoCartURL,
    noOfAddedItems,
    setNoOfAddedItems,
  };
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <>
      <div className="navBar">
        <NavBar />
      </div>
      <div className="main">
        <Nav noOfItems={noOfAddedItems} />
        <div className="pages">
          <Outlet context={contextValue} />
        </div>
      </div>
    </>
  );
}

export default App;
