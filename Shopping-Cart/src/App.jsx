import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Nav from "./components/nav";

function App() {
  const [addedIntoCartURL, setAddedIntoCartURL] = useState([]);
  const [addedIntoCartPrice, setAddedIntoCartPrice] = useState([]);
  const contextValue = {
    setAddedIntoCartPrice,
    setAddedIntoCartURL,
    addedIntoCartPrice,
    addedIntoCartURL,
  };
  return (
    <>
      <div className="navBar">
        <NavBar />
      </div>
      <div className="main">
        <Nav />
        <div className="pages">
          <Outlet context={contextValue} />
        </div>
      </div>
    </>
  );
}

export default App;
