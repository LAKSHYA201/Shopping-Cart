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
      <h1>{addedIntoCartPrice}</h1>
      <h1>{addedIntoCartURL}</h1>
    </>
  );
}
