import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { wishListAdd, wishListRemove } from "../../store/wishList";
import { useState, useEffect } from "react";

const ProductCard = ({
  all,
  logic,
  id,
  wish,
  image,
  title,
  old,
  New,
  rating,
  paddingBottom,
  box,
  full,
  sizeNormal
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const [change, setChange] = useState(true);
  const [check, setCheck] = useState([]);
  const [color, setColor] = useState("");

  const toggle = (id) => {
    if (change && !wish) {
      setColor("text-[red] hover:text-[#D45662]");
      return wishListAdd(id);
    } else {
      navigate(0);

      return wishListRemove(id);
    }
  };

  useEffect(() => {
    let dataLocal = JSON.parse(localStorage.getItem("WISHLIST")) || [];

    setCheck(dataLocal);
  }, []);

  return (
    <>
      <div className="relative">
        <i
          className={`fa-solid fa-heart absolute top-[15px] right-[15px] 
            ${logic}

            ${all}

            ${color}

            hover:text-[#434443]

           text-[30px] cursor-pointer  transition-all duration-300 ease-in-out 
           `}
          onClick={() => {
            dispatch(toggle(id));

            setChange(!change);
          }}
        ></i>

        <Link to={`/product-detail/${id}`}>
          <div
            className={`min-h-[360px] ${paddingBottom} w-[220px] text-[#D2B071] snap-start flex flex-col items-center shrink-[0] md:w-[230px] lg:w-[250px] xl:w-[320px] md:min-h-[370px] lg:min-h-[380px] xl:min-h-[440px] ${full} cursor-pointer`}
          >
            <img
              className={`w-[100%] ${box} ${sizeNormal}`}
              src={image}
              alt="Product-Image"
            />

            <p className="text-center text-[13px] mt-[20px] font-[600]">
              {title}
            </p>

            <div className="flex gap-[15px] mt-[5px]">
              <span className="text-[13px] font-[600]">Rs. {New.toLocaleString()}.00</span>

              {old !== null && (
                <span className="line-through text-[13px] text-[#89734A] decoration-[#B99B64] font-[600]">
                  Rs. {old}.00
                </span>
              )}
            </div>

            {rating !== "NO" && (
              <div className="mt-[10px] flex items-center gap-[15px] ">
                <div>
                  <i className="fa-solid fa-star text-[15px]"></i>
                  <i className="fa-solid fa-star text-[15px]"></i>
                  <i className="fa-solid fa-star text-[15px]"></i>
                  <i className="fa-solid fa-star text-[15px]"></i>
                  <i className="fa-solid fa-star text-[15px]"></i>
                </div>

                <span className="text-[14px] text-[#89734A] font-[500]">
                  {rating}
                </span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
