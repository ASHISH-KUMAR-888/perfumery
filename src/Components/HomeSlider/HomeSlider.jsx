import { useEffect, useState } from "react";

const HomeSlider = () => {
  const mob = ["1.jpg", "2.jpg"];

  const lap = ["23-4_Xlnc_showergel_banner.webp", "New_launch_2025_web_2.webp"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lap.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mt-[30px] mb-[100px]">
        <img
          src={`./images/Slider/${mob[index]}`}
          alt="SLIDER"
          className="w-screen transition-opacity duration-700 ease-in-out block md:hidden"
        />

        <img
          src={`./images/Slider/${lap[index]}`}
          alt="SLIDER"
          className="w-screen transition-opacity duration-700 ease-in-out hidden md:block"
        />
      </div>
    </>
  );
};

export default HomeSlider;
