import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Nav from "./components/nav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="navBar">
        <NavBar />
      </div>
      <div className="main">
        <Nav />
        <div className="pages">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
