const WISHLIST_ADD = "wishlist/add";
const WISHLIST_REMOVE = "wishlist/remove";

export const wishListAdd = (productId) => {
  return { type: WISHLIST_ADD, payload: { productId } };
};

export const wishListRemove = (productId) => {
  return { type: WISHLIST_REMOVE, payload: { productId } };
};

export const wishListReducer = (state = [], action) => {
  if (action.type === WISHLIST_ADD) {
    const temp = JSON.parse(localStorage.getItem("WISHLIST"));

    const combine = temp ? [...temp, action.payload] : [action.payload];

    localStorage.setItem("WISHLIST", JSON.stringify(combine));
  } else if (action.type === WISHLIST_REMOVE) {
    const data = JSON.parse(localStorage.getItem("WISHLIST"));

    if (data) {
      const temp = data.filter((d) => d.productId !== action.payload.productId);

      localStorage.setItem("WISHLIST", JSON.stringify(temp));
    }
  }

  return state;
};
