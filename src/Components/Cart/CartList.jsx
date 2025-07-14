import { useSelector } from "react-redux";
import Cart from "./Cart";
import { productData1 } from "../../features/products/productData1.js";
import { productData2 } from "../../features/products/productData2.js";
import { productData3 } from "../../features/products/productData3.js";
import { celebrity } from "../../features/products/celebrity.js";
import { BestSelling } from "../../features/products/BestSelling.js";
import { Link } from "react-router-dom";

const CartList = () => {
  const ALL_DATA = [
    ...productData1,
    ...productData2,
    ...productData3,
    ...celebrity,
    ...BestSelling,
  ];

  const DATA = useSelector((state) => state.CART);

  const RealData = JSON.parse(localStorage.getItem("CART")) || [];

  const cartRender = RealData.map((cart) => {
    return ALL_DATA.find((add) => {
      return add.id === cart.productId;
    });
  });

  const quantity = RealData.map((data) => data.quantity);

  let Total = 0,
    q;

  cartRender.map((d, i) => {
    q = d.New * quantity[i];

    Total += q;
  });

  return (
    <>
      <div className="min-h-[100px] w-screen bg-black py-[20px]">
        <div className="flex justify-between items-end px-[15px] text-[#D2B071] mb-[10px] md:px-[30px]">
          <p className="font-[800] text-[20px] tracking-[.8px]">Cart</p>
          <Link to="/">
            <i className="fa-solid fa-xmark text-[22px] cursor-pointer"></i>
          </Link>
        </div>

        <div className="Main Div mt-[40px] flex flex-col justify-center items-center gap-[30px]">
          {cartRender.length !== 0 ? (
            cartRender.map((data, index) => (
              <Cart
                key={data.id}
                id={data.id}
                quantity={quantity[index]}
                image={data.image}
                title={data.title}
                New={data.New}
                rating={data.rating}
              />
            ))
          ) : (
            <p className="text-[#D2B071] font-[800] text-[19px] md:text-[25px] tracking-[.8px] lg:text-[30px] lg:tracking-[1.2px]">
              No Product Available
            </p>
          )}
        </div>
      </div>

      <div className="min-h-[100px] w-fit bg-black px-[15px] py-[18px] mx-auto mt-[80px]">
        <p className="text-[#D2B071] font-[800] text-[17px] tracking-[.8px]">
          Add Order Note
        </p>

        <p className="text-[#89734A] font-[500] text-[15px] tracking-[1.2px] mt-[4px]">
          Taxes and shipping calculated at checkout
        </p>

        <Link to="https://buy.stripe.com/test_00w9AV1tpa3qg8LdeWbQY03">
          <button className="h-[60px] w-[320px] mt-[30px] bg-[#D2B071] rounded-[10px] cursor-pointer">
            <div className="flex justify-center items-center gap-[10px]">
              <p className="text-black font-[700] whitespace-nowrap tracking-[.9px]">
                PLACE ORDER Rs.{Total}
              </p>
              <img src="https://cdn.gokwik.co/v4/images/upi-icons.svg" />
              <i className="fa-solid fa-angle-right text-black font-[900]"></i>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};

export default CartList;
