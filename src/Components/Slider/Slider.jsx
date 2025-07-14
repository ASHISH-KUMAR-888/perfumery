import { messages } from "./Data.js";
import { logicSlider } from "./logicSlider.js";

const Slider = () => {
  const { current, prev, next } = logicSlider(messages);

  return (
    <>
      <div className="min-h-[35px] w-screen bg-black text-[#D2B071] flex justify-between items-center gap-x-[15px] px-[10px] text-center py-[10px] md:px-[18vw] lg:px-[28vw]">
        <i className="fa-solid fa-angle-left cursor-pointer" onClick={prev}></i>

        <span className="font-[500] text-[12px] tracking-[.2px] md:text-[14px] md:tracking-[.8px] lg:text-[15px] xl:text-[16px]">
          {messages[current]}
        </span>

        <i
          className="fa-solid fa-angle-right cursor-pointer"
          onClick={next}
        ></i>
      </div>
    </>
  );
};

export default Slider;
