import perfume from "../assets/perfume.jpg";
import watches from "../assets/watches.jpg";
import sunglasses from "../assets/sunglasses.jpg";
import { useState } from "react";
export default function Home() {
  const [img, setImg] = useState(perfume);
  return (
    <>
      <div className="homePage">
        <div className="imageHolder">
          <img src={img} className="homeImg"></img>
        </div>
        <div className="imageSlider">
          <button className="slider" onClick={() => setImg(perfume)}></button>
          <button className="slider" onClick={() => setImg(watches)}></button>
          <button
            className="slider"
            onClick={() => setImg(sunglasses)}
          ></button>
        </div>
      </div>
    </>
  );
}
