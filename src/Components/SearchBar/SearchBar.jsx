import { useState, useEffect, useRef } from "react";
import DataBox from "./DataBox";
import { productData1 } from "../../features/products/productData1.js";
import { productData2 } from "../../features/products/productData2.js";
import { productData3 } from "../../features/products/productData3.js";
import { celebrity } from "../../features/products/celebrity.js";
import { BestSelling } from "../../features/products/BestSelling.js";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ animate, amimateBool }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [data, setData] = useState([]);

  const box = useRef(null);

  const [inputbool, setInputBool] = useState(false);
  const [databool, setDataBool] = useState(false);
  const [searchIndex, setSearchIndex] = useState(-1);

  const ALL_DATA = [
    ...productData1,
    ...productData2,
    ...productData3,
    ...celebrity,
    ...BestSelling,
  ];

  const handeleSearchBar = (e) => {
    setSearch(e.target.value);

    setData(
      ALL_DATA.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  const handleKeyDown = (e) => {
    if (e.key.startsWith("Arrow") || e.key.startsWith("Enter")) {
      switch (e.key) {
        case "ArrowDown":
          setSearchIndex((prev) => (prev + 1) % data.length);

          break;

        case "ArrowUp":
          setSearchIndex((prev) => (prev - 1 + data.length) % data.length);

          break;

        case "Enter":
          setSearch(data[searchIndex].title);

          const route = data.find((d, i) => {
            return i == searchIndex && d;
          });

          navigate(`/product-detail/${route.id}`);

          break;

        default:
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      setDataBool(box.current.contains(e.target));
    };

    document.addEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div
        className={`w-screen px-[40px] flex flex-col items-center gap-[20px] transform translate-y-[-100px] z-[-20] transition-all duration-[.2s]  ease-in-out ${
          amimateBool && "translate-y-[0]"
        } md:mt-[20px] `}
        ref={box}
      >
        <div className="text-[#D2B071] w-full flex justify-between items-center gap-[25px] ">
          <div className="flex justify-start items-center gap-[20px] w-full">
            <i className="fa-solid fa-magnifying-glass font-[900] text-[21px]"></i>
            <input
              className="h-[40px] w-full outline-none font-[640] tracking-[1.2px] text-[18px] placeholder:font-[700] pl-[15px]"
              type="text"
              placeholder="Search For...."
              value={search}
              onChange={handeleSearchBar}
              onFocus={() => setInputBool(true)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <i
            className="fa-solid fa-xmark font-[900] text-[28px] cursor-pointer"
            onClick={() => setSearch("")}
          ></i>
        </div>

        {inputbool && search !== "" && databool && (
          <div className="min-h-[0] max-h-[300px] w-[94%] overflow-auto search-boxy">
            {data.map((product, index) => {
              return (
                <DataBox
                  key={product.id}
                  index={index}
                  searchIndex={searchIndex}
                  id={product.id}
                  setSearch={setSearch}
                  image={product.image}
                  title={product.title}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
