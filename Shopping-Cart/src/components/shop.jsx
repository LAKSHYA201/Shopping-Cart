import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const {
    setAddedIntoCartPrice,
    setAddedIntoCartURL,
    addedIntoCartPrice,
    addedIntoCartURL,
  } = useOutletContext();
  const [perfumeURL, setPerfumeURL] = useState([]);
  const [perfumePrice, setPerfumePrice] = useState([]);
  const [watchURL, setWatchURL] = useState([]);
  const [watchPrice, setWatchPrice] = useState([]);
  const [sunglassesURL, setSunglassesURL] = useState([]);
  const [sunglassesPrice, setSunglassesPrice] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newPerfumeURL = [];

        const newPerfumePrice = [];

        for (let i = 0; i <= 4; i++) {
          const response = await fetch(
            "https://dummyjson.com/products/category/fragrances",
            {
              mode: "cors",
            }
          );
          const data = await response.json();

          newPerfumeURL.push(data.products[i].thumbnail);

          newPerfumePrice.push(data.products[i].price);
        }

        setPerfumeURL(newPerfumeURL);

        setPerfumePrice(newPerfumePrice);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newWatchURL = [];

        const newWatchPrice = [];

        for (let i = 0; i <= 4; i++) {
          const response = await fetch(
            "https://dummyjson.com/products/category/mens-watches",
            {
              mode: "cors",
            }
          );
          const data = await response.json();

          newWatchURL.push(data.products[i].thumbnail);

          newWatchPrice.push(data.products[i].price);
        }

        setWatchURL(newWatchURL);

        setWatchPrice(newWatchPrice);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newSunglassesURL = [];

        const newSunglassesPrice = [];

        for (let i = 0; i <= 4; i++) {
          const response = await fetch(
            "https://dummyjson.com/products/category/sunglasses",
            {
              mode: "cors",
            }
          );
          const data = await response.json();

          newSunglassesURL.push(data.products[i].thumbnail);

          newSunglassesPrice.push(data.products[i].price);
        }

        setSunglassesURL(newSunglassesURL);

        setSunglassesPrice(newSunglassesPrice);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="shopPage">
        <h1 style={{ marginLeft: "5%" }}>Shop</h1>
        <div className="shopItemsHolder">
          <div className="shopItem">
            <img src={perfumeURL[0]}></img>
            <div className="details">
              <div>${perfumePrice[0]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, perfumeURL[0]]);
                  setAddedIntoCartPrice((prev) => [...prev, perfumePrice[0]]);
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="shopItem">
            <img src={perfumeURL[1]}></img>
            <div className="details">
              <div>${perfumePrice[1]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, perfumeURL[1]]);
                  setAddedIntoCartPrice((prev) => [...prev, perfumePrice[1]]);
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="shopItem">
            <img src={perfumeURL[2]}></img>
            <div className="details">
              <div>${perfumePrice[2]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, perfumeURL[2]]);
                  setAddedIntoCartPrice((prev) => [...prev, perfumePrice[2]]);
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="shopItem">
            <img src={perfumeURL[3]}></img>
            <div className="details">
              <div>${perfumePrice[3]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, perfumeURL[3]]);
                  setAddedIntoCartPrice((prev) => [...prev, perfumePrice[3]]);
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="shopItem">
            <img src={perfumeURL[4]}></img>
            <div className="details">
              <div>${perfumePrice[4]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, perfumeURL[4]]);
                  setAddedIntoCartPrice((prev) => [...prev, perfumePrice[4]]);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="shopItemsHolder">
          <div className="shopItem">
            <img src={watchURL[0]}></img>
            <div className="details">
              <div>${watchPrice[0]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, watchURL[0]]);
                  setAddedIntoCartPrice((prev) => [...prev, watchPrice[0]]);
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="shopItem">
            <img src={watchURL[1]}></img>
            <div className="details">
              <div>${watchPrice[1]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, watchURL[1]]);
                  setAddedIntoCartPrice((prev) => [...prev, watchPrice[1]]);
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="shopItem">
            <img src={watchURL[2]}></img>
            <div className="details">
              <div>${watchPrice[2]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, watchURL[2]]);
                  setAddedIntoCartPrice((prev) => [...prev, watchPrice[2]]);
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="shopItem">
            <img src={watchURL[3]}></img>
            <div className="details">
              <div>${watchPrice[3]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, watchURL[3]]);
                  setAddedIntoCartPrice((prev) => [...prev, watchPrice[3]]);
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="shopItem">
            <img src={watchURL[4]}></img>
            <div className="details">
              <div>${watchPrice[4]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, watchURL[4]]);
                  setAddedIntoCartPrice((prev) => [...prev, watchPrice[4]]);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="shopItemsHolder">
          <div className="shopItem">
            <img src={sunglassesURL[0]}></img>
            <div className="details">
              <div>${sunglassesPrice[0]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, sunglassesURL[0]]);
                  setAddedIntoCartPrice((prev) => [
                    ...prev,
                    sunglassesPrice[0],
                  ]);
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="shopItem">
            <img src={sunglassesURL[1]}></img>
            <div className="details">
              <div>${sunglassesPrice[1]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, sunglassesURL[1]]);
                  setAddedIntoCartPrice((prev) => [
                    ...prev,
                    sunglassesPrice[1],
                  ]);
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="shopItem">
            <img src={sunglassesURL[2]}></img>
            <div className="details">
              <div>${sunglassesPrice[2]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, sunglassesURL[2]]);
                  setAddedIntoCartPrice((prev) => [
                    ...prev,
                    sunglassesPrice[2],
                  ]);
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="shopItem">
            <img src={sunglassesURL[3]}></img>
            <div className="details">
              <div>${sunglassesPrice[3]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, sunglassesURL[3]]);
                  setAddedIntoCartPrice((prev) => [
                    ...prev,
                    sunglassesPrice[3],
                  ]);
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="shopItem">
            <img src={sunglassesURL[4]}></img>
            <div className="details">
              <div>${sunglassesPrice[4]}</div>
              <button
                className="addToCartBtn"
                onClick={() => {
                  setAddedIntoCartURL((prev) => [...prev, sunglassesURL[4]]);
                  setAddedIntoCartPrice((prev) => [
                    ...prev,
                    sunglassesPrice[4],
                  ]);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
