import { useParams } from "react-router-dom";
import { productData1 } from "../../features/products/productData1.js";
import { productData2 } from "../../features/products/productData2.js";
import { productData3 } from "../../features/products/productData3.js";
import { celebrity } from "../../features/products/celebrity.js";
import { BestSelling } from "../../features/products/BestSelling.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartProductAdd } from "../../store/cart.js";

const ProductDetail = () => {
  const { id } = useParams();

  const ALL_DATA = [
    ...productData1,
    ...productData2,
    ...productData3,
    ...celebrity,
    ...BestSelling,
  ];

  const product = ALL_DATA.filter((data) => data.id === id);

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [cartAdded, setCartAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (cartAdded) {
      const timer = setTimeout(() => setCartAdded(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [cartAdded]);

  return (
    <>
      {cartAdded && (
        <div
          className="w-[240px] fixed top-[30px] left-[50%] transform translate-x-[-50%] animate-slideDown z-50 text-white px-6 py-4 rounded-xl shadow-lg flex justify-center items-center gap-[10px]"
          style={{
            background:
              "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
          }}
        >
          <i className="fa-solid fa-circle-check"></i>

          <span className="tex-center">Product Added to Cart!</span>
        </div>
      )}

      <div className="min-h-[100px] w-screen">
        <div className="min-h-[100px] w-full bg-black md:flex md:justify-center md:items-center md:gap-[6vw] md:py-[7vw]">
          <img
            className="w-full md:w-[40%] lg:w-[35%] xl:w-[30%]"
            src={`${product[0].image}`}
            alt={product[0].title}
          />

          <div className="text-[#D2B071] flex flex-col justify-start gap-[7px] px-[20px]">
            <span className="text-[#89734A] mt-[25px] relative font-[700] text-[15px] tracking-[.8px]">
              XLNC Perfumery
              <span className="absolute top-[3px] text-[1px]">TM</span>
            </span>
            <span className="text-[#89734A] font-[300] text-[15px] tracking-[.8px]">
              SKU: XPCT100
            </span>
            <p className="text-[#D2B071] text-[18px] font-[800] tracking-[1px] mb-[15px]">
              {product[0].title}
            </p>
            <p className="h-[30px] w-[150px] bg-[#D2B071] text-[#493D27] font-[500] flex justify-center items-center">
              Save Rs. 200.00
            </p>

            <div className="flex justify-start items-center gap-[15px] mt-[15px]">
              <div>
                <i className="fa-solid fa-star text-[#D2B071]"></i>
                <i className="fa-solid fa-star text-[#D2B071]"></i>
                <i className="fa-solid fa-star text-[#D2B071]"></i>
                <i className="fa-solid fa-star text-[#D2B071]"></i>
                <i className="fa-solid fa-star text-[#D2B071]"></i>
              </div>

              {product[0].rating !== "NO" && (
                <p className="font-[800]">
                  {product[0].rating} &nbsp; ( Rating )
                </p>
              )}
            </div>

            <div className="flex justify-start items-center gap-[25px] mt-[20px]">
              <p className="font-[800]">Rs. {product[0].New}.00</p>

              {product[0].old !== null && (
                <p className="line-through text-[#89734A] decoration-[#B99B64] font-[500]">
                  Rs. {product[0].old}.00
                </p>
              )}
            </div>

            <p className="text-[#89724A] text-[13px] mt-[-5px]">
              Inclusive of all taxes
              <span className="underline underline-offset-[5px]">
                Shipping calculated
              </span>
              at checkout
            </p>

            <div className="mt-[23px]">
              <p className="mb-[13px]">Size :</p>

              <div className="h-[47px] w-[80px] border-[1px] border-[#D2B071] flex justify-center items-center">
                <p>100 ml</p>
              </div>
            </div>

            <div className="w-[140px] h-[50px] flex justify-center items-center gap-[45px] mt-[20px]">
              <i
                className="fa-solid fa-minus cursor-pointer"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              ></i>
              <span className="font-[800] text-[17px]">{quantity}</span>
              <i
                className="fa-solid fa-plus cursor-pointer"
                onClick={() => setQuantity((prev) => prev + 1)}
              ></i>
            </div>

            <button
              className="h-[50px] w-full font-[300] tracking-[1.5px] cursor-pointer mt-[10px] mb-[15px] effect-btn hover:bg-[#D2B071] hover:text-black transition-all duration-300 ease-in-out"
              onClick={() => {
                dispatch(cartProductAdd(product[0].id, quantity));

                setCartAdded(true);
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>

        <div className="h-[100px] w-full bg-black mt-[30px]">
          <p className="text-[#D2B071] text-[18px] font-[600] tracking-[1.5px] mb-[10px] text-center">
            Secure Checkout With
          </p>

          <div className="flex justify-center items-center gap-[15px] w-[80%] mx-auto">
            <img
              className="w-[50px]"
              src="https://trust.conversionbear.com/../static/badges/rupay_color_card.svg"
              alt="Icons"
            />

            <img
              className="w-[50px]"
              src="https://trust.conversionbear.com/../static/badges/paytm_color_card.svg"
              alt="Icons"
            />

            <img
              className="w-[50px]"
              src="https://trust.conversionbear.com/../static/badges/googlepay_color_card.svg"
              alt="Icons"
            />

            <img
              className="w-[50px]"
              src="https://trust.conversionbear.com/../static/badges/visa_1_color_card.svg"
              alt="Icons"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
