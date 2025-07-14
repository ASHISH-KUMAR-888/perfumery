import { productData1 } from "../../features/products/productData1.js";
import { productData2 } from "../../features/products/productData2.js";
import { productData3 } from "../../features/products/productData3.js";
import { celebrity } from "../../features/products/celebrity.js";
import { BestSelling } from "../../features/products/BestSelling.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useEffect, useState } from "react";

const ViewAll = () => {
  let ALL_DATA = [
    ...productData1,
    ...productData2,
    ...productData3,
    ...celebrity,
    ...BestSelling,
  ];

  const [select, setSelect] = useState("");

  const locall = JSON.parse(localStorage.getItem("WISHLIST")) || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (select === "ascending") {
    ALL_DATA.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  } else if (select === "descending") {
    ALL_DATA.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
  } else if (select === "price-low-to-high") {
    ALL_DATA.sort((a, b) => {
      return a.New - b.New;
    });
  } else if (select === "price-high-to-low") {
    ALL_DATA.sort((a, b) => {
      return b.New - a.New;
    });
  } else if (select === "reset") {
    ALL_DATA = [
      ...productData1,
      ...productData2,
      ...productData3,
      ...celebrity,
      ...BestSelling,
    ];
  }

  return (
    <>
      <h1 className="text-[hotpink] text-center font-[800] tracking-[1.2px] underline decoration-wavy underline-offset-[14px] font-mono text-[40px] underline-offset-[10px] mt-[20px]">
        ALL-PRODUCTS
      </h1>

      <div className=" flex flex-col justify-center items-center  gap-[10px] text-[#d2b071]  mt-[50px] md:mt-[0] md:pr-[50px] md:justify-end md:items-end">
        <label
          htmlFor="filter"
          className="text-[24px] font-[800] tracking-[2px] "
        >
          Select a Filter
        </label>

        <select
          id="filter"
          className="min-w-[170px] cursor-pointer font-[600] text-[18px] tracking-[.8px] outline-none"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option
            value=""
            className="bg-black text-[#d2b071] cursor-pointer"
            disabled
            hidden
          >
            Select an Option
          </option>

          <option
            value="reset"
            className="bg-black text-[#d2b071] cursor-pointer"
          >
            Reset (Everything)
          </option>

          <option
            value="descending"
            className="bg-black text-[#d2b071] cursor-pointer"
          >
            Z To A (Descend)
          </option>
          <option
            value="ascending"
            className="bg-black text-[#d2b071] cursor-pointer"
          >
            A To Z (Ascend)
          </option>

          <option
            value="price-low-to-high"
            className="bg-black text-[#d2b071] cursor-pointer"
          >
            Price (Low To High)
          </option>

          <option
            value="price-high-to-low"
            className="bg-black text-[#d2b071] cursor-pointer"
          >
            Price (High To Low)
          </option>
        </select>
      </div>

      <div className="w-screen bg-black px-[30px] py-[100px] flex justify-center flex-wrap gap-x-[30px] gap-y-[30px] md:gap-x-[12.9px] md:gap-y-[50px] lg:gap-x-[40px]">
        {ALL_DATA.map((data) => {
          let temp = null;
          let boolyy = false;

          if (locall.length > 0) {
            locall.map((d) => {
              if (d.productId === data.id) {
                temp = "text-[red] hover:text-[#D45662]";
                boolyy = true;
              }
            });
          }

          return (
            <ProductCard
              key={data.id}
              all={temp}
              id={data.id}
              wish={boolyy}
              image={data.image}
              title={data.title}
              old={data.old}
              New={data.New}
              rating={data.rating}
              sizeNormal="h-[228px] lg:h-[300px] xl:h-[340px]"
            />
          );
        })}
      </div>
    </>
  );
};

export default ViewAll;
