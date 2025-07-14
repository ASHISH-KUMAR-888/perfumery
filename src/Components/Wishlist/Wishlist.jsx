import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { productData1 } from "../../features/products/productData1.js";
import { productData2 } from "../../features/products/productData2.js";
import { productData3 } from "../../features/products/productData3.js";
import { celebrity } from "../../features/products/celebrity.js";
import { BestSelling } from "../../features/products/BestSelling.js";
import { useState, useEffect } from "react";

const Wishlist = () => {
  const ALL_DATA = [
    ...productData1,
    ...productData2,
    ...productData3,
    ...celebrity,
    ...BestSelling,
  ];

  const [wishlist, setWishlist] = useState([]);

  const store = useSelector((state) => state.WISHLIST);

  const DATA_LOCAL = JSON.parse(localStorage.getItem("WISHLIST")) || [];

  let DATA = null;

  if (DATA_LOCAL) {
    DATA = DATA_LOCAL.map((data) => {
      return ALL_DATA.find((wishlist) => {
        return data.productId === wishlist.id;
      });
    });
  }

  return (
    <>
      <div className="w-screen">
        <h3 className="text-[50px] text-[hotpink] underline underline-offset-[12px] decoration-wavy font-[900] tracking-[1.5px] text-center mb-[70px]">
          WISH-LIST
        </h3>

        <div className="w-full flex justify-center gap-[30px] md:gap-[40px] lg:gap-[50px]  mx-auto flex-wrap">
          {DATA && DATA.length > 0 ? (
            DATA.map((data) => {
              return (
                <ProductCard
                  key={data.id}
                  logic="text-[red] hover:text-[#D45662]"
                  id={data.id}
                  wish={true}
                  image={data.image}
                  title={data.title}
                  old={data.old}
                  New={data.New}
                  rating={data.rating}
                />
              );
            })
          ) : (
            <p className="text-[#D2B071] font-[800] text-[19px] md:text-[25px] tracking-[.8px] lg:text-[30px] lg:tracking-[1.2px]">
              No Product Available
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
