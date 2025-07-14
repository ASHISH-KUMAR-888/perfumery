const CART_ADD = "cart/add";
const CART_REMOVE = "cart/remove";
const CART_OUANTITY_DECREASE = "cart/quantity/decrease";

export const cartProductAdd = (productId, quantity = 1) => {
  return { type: CART_ADD, payload: { productId, quantity } };
};

export const cartProductRemove = (productId) => {
  return { type: CART_REMOVE, payload: { productId } };
};

export const cartProductQuantityDecrease = (productId) => {
  return { type: CART_OUANTITY_DECREASE, payload: { productId } };
};

export const cartReducer = (state = [], action) => {
  if (action.type === CART_ADD) {
    const checker = JSON.parse(localStorage.getItem("CART")) || [];

    let zone =
      checker.length > 0
        ? JSON.stringify([...checker, action.payload])
        : JSON.stringify([action.payload]);

    if (
      checker.some((element) => element.productId === action.payload.productId)
    ) {
      const app = checker.map((d) => {
        if (d.productId === action.payload.productId) {
          return {
            productId: d.productId,
            quantity: d.quantity + action.payload.quantity,
          };
        }

        return d;
      });

      localStorage.setItem("CART", JSON.stringify(app));
    } else {
      localStorage.setItem("CART", zone);
    }
  } else if (action.type === CART_REMOVE) {
    const localData = JSON.parse(localStorage.getItem("CART")) || [];

    let REMOVE = [];

    if (localData.length > 0) {
      REMOVE = localData.filter(
        (d) => d.productId !== action.payload.productId
      );
    }

    localStorage.setItem("CART", JSON.stringify(REMOVE));
  } else if (action.type === CART_OUANTITY_DECREASE) {
    const MAIN = JSON.parse(localStorage.getItem("CART")) || [];

    let less = [];

    if (MAIN.length > 0) {
      less = MAIN.map((d) => {
        if (d.productId === action.payload.productId && d.quantity > 0) {
          return { ...d, quantity: d.quantity - 1 };
        }

        return d;
      });
    }

    const Final = less.filter((d) => d.quantity !== 0);

    localStorage.setItem("CART", JSON.stringify(Final));
  }

  return state;
};
