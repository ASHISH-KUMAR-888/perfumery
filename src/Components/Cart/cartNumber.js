export const CART_NUMBER = () => {
  const CartNumber = JSON.parse(localStorage.getItem("CART")) || [];

  let cartNum = 0;

  if (CartNumber.length > 0) {
    CartNumber.map((data) => {
      cartNum += data.quantity;
    });
  }

  return cartNum;
};
