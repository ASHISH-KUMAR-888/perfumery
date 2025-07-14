import { useDispatch } from "react-redux";
import {
  cartProductAdd,
  cartProductQuantityDecrease,
  cartProductRemove,
} from "../../store/cart.js";
import { useNavigate } from "react-router-dom";

const Cart = ({ id, quantity, image, title, New, rating }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-[150px] w-[90%] flex justify-center items-center gap-[5vw] px-[15px] py-[10px] lg:gap-[3vw]">
        <img
          className="w-[25%] md:w-[20%] lg:w-[17%] xl:w-[15%]"
          src={image}
          alt={title}
        />

        <div className="flex flex-col justify-between items-start gap-[10px] w-[330px] md:w-[400px]">
          <div className="text-[#89734A] flex flex-col justify-between gap-[5px]">
            <p className="text-[#D2B071] font-[800] text-[13.5px] tracking-[.8px] lg:text-[16px] lg:tracking-[1.2px]">
              {title}
            </p>
            <p className="font-[700] text-[13px] mt-[10px] lg:text-[15.5px]">
              Rs. {New}.00
            </p>

            {rating !== "NO" ? (
              <p className="font-[700] text-[13px] lg:text-[15.5px]">
                {rating} &nbsp; 🌟
              </p>
            ) : (
              <p className="font-[700] text-[13px] lg:text-[15.5px]">
                0.0 &nbsp; 🌟
              </p>
            )}
          </div>

          <div className="text-[#D2B071] flex justify-center items-center gap-[45px] flex-wrap">
            <div className="flex justify-start items-center gap-[25px]">
              <i
                className="fa-solid fa-minus cursor-pointer lg:text-[17px]"
                onClick={() => {
                  dispatch(cartProductQuantityDecrease(id));
                  navigate(0);
                }}
              ></i>
              <span className="font-[800] text-[17px] lg:text-[20px]">
                {quantity}
              </span>
              <i
                className="fa-solid fa-plus cursor-pointer lg:text-[17px]"
                onClick={() => {
                  dispatch(cartProductAdd(id));
                  navigate(0);
                }}
              ></i>
            </div>

            <button
              className="underline font-[500] underline-offset-[5px] cursor-pointer lg:text-[18px]"
              onClick={() => {
                dispatch(cartProductRemove(id));
                navigate(0);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
