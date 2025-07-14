import { Link } from "react-router-dom";

const DataBox = ({ index, searchIndex, id, setSearch, image, title }) => {
  return (
    <>
      <Link to={`/product-detail/${id}`}>
        <div
          className={`min-h-[50px] w-full rounded-[10px] flex justify-start items-center gap-[3vw] px-[15px] py-[10px] lg:gap-[1vw] hover:bg-[gray] ${
            index === searchIndex
              ? "bg-[gray] text-black"
              : "bg-black text-[#D2B071]"
          }`}
        >
          <img
            className="w-[8%] md:w-[5%] lg:w-[5%] xl:w-[3%] cursor-pointer"
            src={image}
            alt={title}
            onClick={() => {
              setSearch(title);
            }}
          />

          <div className="flex flex-col justify-between items-start gap-[10px] w-[330px] md:w-[400px]">
            <div className=" flex flex-col justify-between gap-[5px]">
              <p
                className=" font-[800] text-[9.5px] tracking-[.8px] lg:text-[13px] lg:tracking-[1.2px] cursor-pointer"
                onClick={() => {
                  setSearch(title);
                }}
              >
                {title}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DataBox;
