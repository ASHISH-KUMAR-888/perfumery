import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './App.css'
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetail from "./Components/ProductDetail/ProductDetail.jsx";
import CartList from "./Components/Cart/CartList.jsx";
import Wishlist from "./Components/Wishlist/Wishlist.jsx";
import ViewAll from "./Components/ViewAll/ViewAll.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <CartList />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
   {
    path: "/view-all",
    element: <ViewAll />,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </StrictMode>
);
