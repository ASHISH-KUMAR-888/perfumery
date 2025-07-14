import ProductCard from "../../Components/ProductCard/ProductCard.jsx";
import productList from "./productList.js";
import NavigateButton from "../../Components/NavigateButton/NavigateButton.jsx";

import useNavigateBtn from "../../Components/NavigateButton/useNavigateBtn.js";

import Button from "../../Components/Button/Button.jsx";

const ProductList = ({
  DATA,
  paddingBottom,
  children,
  box,
  grid,
  full,
  margin,
}) => {
  let { el, isDrag } = productList();

  const local = JSON.parse(localStorage.getItem("WISHLIST")) || [];

  const { scroll, prev, next, hide, width } = useNavigateBtn(250);

  const Refs = (node) => {
    el.current = node;
    scroll.current = node;
  };

  return (
    <div className="bg-black mt-[60px]">
      {children}

      <div className="min-h-[400px] w-screen group relative px-[25px] bg-black mt-[50px]">
        {hide !== 0 && (
          <NavigateButton Symbol="fa-angle-left" Pos="left-[35px]" btn={prev} />
        )}

        <div
          className={`boxy h-[100%] w-[100%]  bg-black overflow-auto flex  gap-[20px]  cursor-grab active:cursor-grabbing scroll-smooth ${
            isDrag ? "snap-none" : "snap-x snap-mandatory"
          } md:gap-[30px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[60px] ${grid}`}
          ref={Refs}
        >
          {DATA.map((data) => {
            let temp = null;
            let boolyy = false;

            if (local.length > 0) {
              local.map((d) => {
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
                paddingBottom={paddingBottom}
                box={box}
                full={full}
              />
            );
          })}
        </div>

        {width !== hide && (
          <NavigateButton
            Symbol="fa-angle-right"
            Pos="right-[62px]"
            btn={next}
          />
        )}
      </div>

      <Button margin={margin} />
    </div>
  );
};

export default ProductList;
