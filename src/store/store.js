import { combineReducers, createStore } from "redux";
import { cartProductAdd, cartProductRemove, cartReducer } from "./cart";
import { wishListAdd, wishListRemove, wishListReducer } from "./wishList";

const reducer = combineReducers({
  CART: cartReducer,
  WISHLIST: wishListReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
