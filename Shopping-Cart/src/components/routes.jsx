import App from "../App";
import Home from "./Home";
import Shop from "./shop";
import Cart from "./cart";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
];
export default routes;
