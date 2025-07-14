import Slider from "../Components/Slider/Slider";
import ProductList from "../features/products/ProductList.jsx";
import { productData1 } from "../features/products/productData1.js";
import { productData2 } from "../features/products/productData2.js";
import { productData3 } from "../features/products/productData3.js";
import { celebrity } from "../features/products/celebrity.js";
import { BestSelling } from "../features/products/BestSelling.js";
import Text from "../Components/Text/Text.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";
import SearchBar from "../Components/SearchBar/SearchBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import IconSlider from "../Components/IconSlider/IconSlider.jsx";

import { useState } from "react";
import HomeSlider from "../Components/HomeSlider/HomeSlider.jsx";
import VideoList from "../Components/Video/VideoList.jsx";

const Home = () => {
  const [value, setValue] = useState(false);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return (
    <>
      <Slider />

      <Navbar toggle={toggle} />

      {<SearchBar animate="translate-y-[0]" amimateBool={value} />}

      <HomeSlider/>

      <ProductList DATA={productData1}>
        <Text text="Refreshing Cleanse, Irresistible Fragrance" />

        <Text
          text="Shower Gel"
          font="font-[800]"
          size="text-[30px]"
          style="tracking-[1.5px] "
        />
      </ProductList>

      <ProductList DATA={productData2}>
        <Text text="Introducing the Essence – A Fragrance to Remember" />

        <Text
          text="Newly Launch"
          font="font-[800]"
          size="text-[30px]"
          style="tracking-[1.5px] "
        />
      </ProductList>

      <ProductList
        DATA={celebrity}
        grid="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden"
        full="w-[100%]! 2xl:w-[95%]!"
        margin="mt-[40px]"
      >
        <Text text="Discover Top Picks We Recommend." />

        <Text
          text="Loved By Your Favourite Celebrity"
          font="font-[800]"
          size="text-[30px]"
          style="tracking-[1.5px] "
        />
      </ProductList>

      <ProductList
        DATA={BestSelling}
        grid="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden"
        full="w-[100%]! 2xl:w-[95%]!"
        margin="mt-[40px]"
      >
        <Text
          text="Discover Our Best-Selling Products That Keep Customers Coming Back.

"
          font="font-[800]"
          size="text-[30px]"
          style="tracking-[1.5px] "
        />
      </ProductList>

      <VideoList/>

      <div className="mt-[80px] mb-[20px] flex flex-col justify-center items-center gap-[15px] px-[40px] md:px-[10vw] lg:px-[14vw]">
        <Text
          text="@xlncperfumeryind"
          font="font-[800]"
          size="text-[30px]"
          style="tracking-[1.5px] underline underline-offset-[10px]"
        />

        <Text
          text="Experience the allure of luxury scents, crafted to perfection, without the hefty price tag! ✨ At XLNC Perfumery, we believe everyone deserves to smell like a million bucks without spending it.



"
          style="leading-[26px]"
        />
      </div>

      <div className="mb-[60px]">
        <img
          src="./images/mob.jpg"
          alt="BANNER"
          className="w-screen block md:hidden"
        />
        <img
          src="./images/xlnc_web.webp"
          alt="BANNER"
          className="w-screen hidden md:block"
        />
      </div>

      <IconSlider />

      <ProductList
        DATA={productData3}
        paddingBottom="pb-[14px]"
        box="h-[350px]"
      >
        <Text
          text="Luxe Edition"
          font="font-[800]"
          size="text-[30px]"
          style="tracking-[1.5px] "
        />
      </ProductList>

      <Footer />
    </>
  );
};

export default Home;
