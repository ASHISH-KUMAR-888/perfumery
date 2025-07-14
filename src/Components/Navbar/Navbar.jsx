import { Link } from "react-router-dom";

import { CART_NUMBER } from "../Cart/cartNumber.js";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ toggle }) => {
  const [menuBool, setMenuBool] = useState(false);

  const anchor = useRef(null);

  const handleMenuToggle = () => {
    setMenuBool(!menuBool);
  };

  const items1 = [
    "Shower Gel",
    "Newly Launch",
    "All Inspired",
    "Best Seller (TOP 50)",
    "Luxe Edition",
    "Celebrity Perfumes",
    "XP Combos",
    "Gem Collection",
    "Perfume Enhancer",
    "UAE Collection",
    "Distributor & Super Stockist",
    "Bulk Order",
    "Influencers/Collabration",
  ];

  const items2 = [
    "Shower Gel",
    "Newly Launch",
    "All Inspired",
    "Best Seller (TOP 50)",
    "Luxe Edition",
    "Celebrity Perfumes",
    "XP Combos",
    "Gem Collection",
  ];

  useEffect(() => {
    const anchorItems = anchor.current.querySelectorAll("a");

    if (menuBool) {
      document.body.style.overflow = "hidden";

      anchor.current.style.overflow = "auto";

      anchorItems.forEach((d, i) => {
        d.style.transitionDelay = `${i * 70 + 200}ms`;
      });
    } else {
      document.body.style.overflow = "";

      anchorItems.forEach((d, i) => {
        d.style.transitionDelay = `0ms`;
      });
    }
  }, [menuBool]);

  return (
    <>
      <nav className="h-[100px] w-screen mt-[30px] text-[#D2B071] bg-black flex justify-between items-center gap-[15px] px-[15px] relative md:px-[30px] xl:px-[40px] z-[15]">
        <div
          className="h-[17px] w-[23px] flex flex-col justify-between group cursor-pointer md:hidden"
          onClick={handleMenuToggle}
        >
          <div className="h-[2px] w-full bg-[#D2B071] group-hover:bg-[red] transition-colors duration-700"></div>
          <div className="h-[2px] w-full bg-[#D2B071] group-hover:bg-[hotpink] transition-colors duration-700"></div>
          <div className="h-[2px] w-full bg-[#D2B071] group-hover:bg-[orange] transition-colors duration-700"></div>
        </div>

        <div
          className={`w-[75%] h-[90vh] text-[#D2B071] remove-scroll px-[20px] py-[35px] z-[30] pb-[80px] bg-black absolute left-[-80%] top-[0] transition-all duration-[.4s] ease-in-out ${
            menuBool && "left-[0]"
          } md:hidden`}
          ref={anchor}
        >
          <div className="flex justify-end items-center">
            <i
              className="fa-solid fa-xmark text-[25px] cursor-pointer"
              onClick={handleMenuToggle}
            ></i>
          </div>
          {items1.map((d, i) => {
            return (
              <div
                key={i}
                className={`h-[65px] border-b-[2px] border-[#201A11] rounded-b-[10px] flex justify-start items-center `}
              >
                <a
                  href="#"
                  className={`font-[600] tracking-[.8px]  transition-all duration-[.7s] ease-in-out  transform   ${
                    menuBool
                      ? "translate-y-[0] opacity-[1]"
                      : "translate-y-[30px] opacity-[0]"
                  } `}
                >
                  {d}
                </a>
              </div>
            );
          })}
        </div>

        <img
          className="h-[68%] absolute left-[50%] transform -translate-x-1/2 block md:hidden"
          src="images/logo.png"
          alt="Logo"
        />

        <img
          className="h-[88%] hidden md:block"
          src="images/XLNC-1.avif"
          alt="Logo"
        />

        <div className="hidden md:block lg:hidden md:flex justify-center items-center gap-[20px] flex-wrap">
          {items2.map((d, i) => {
            return (
              <a
                href="#"
                key={i}
                className="text-[#D2B071] font-[600] tracking-[.8px]"
              >
                {d}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:block lg:flex justify-center items-center gap-[20px] flex-wrap xl:gap-[30px]">
          {items1.map((d, i) => {
            return (
              <a
                href="#"
                key={i}
                className="text-[#D2B071] font-[600] tracking-[.8px]"
              >
                {d}
              </a>
            );
          })}
        </div>

        <div className="flex gap-[20px]">
          <i
            className="fa-solid fa-magnifying-glass text-[24px]  cursor-pointer"
            title="Search"
            onClick={toggle}
          ></i>

          <Link to="/wishlist">
            <i
              className="fa-solid fa-heart text-[red] text-[24px] cursor-pointer"
              title="Wishlist"
            ></i>
          </Link>

          <Link to="/cart">
            <i
              className="fa-solid fa-bag-shopping text-[25px] relative cursor-pointer"
              title="Cart"
            >
              <div className="h-[17.6px] w-[17.6px] p-[2px] text-black bg-[#D2B071] flex justify-center items-center text-[10px] rounded-[50%] absolute top-[0] right-[-6px] font-[900]">
                {CART_NUMBER()}
              </div>
            </i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
