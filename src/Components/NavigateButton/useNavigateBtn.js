import { useRef, useState } from "react";

const useNavigateBtn = (num = 200) => {
  const scroll = useRef(null);
  const [hide, setHide] = useState(0);
  const width = scroll.current?.scrollWidth - scroll.current?.clientWidth;

  const prev = () => {
    scroll.current?.scrollBy({ left: -num, behavior: "smooth" });
    setHide(scroll.current.scrollLeft);
  };

  const next = () => {
    scroll.current?.scrollBy({ left: num, behavior: "smooth" });
    setHide(Math.ceil(scroll.current.scrollLeft));
  };

  return {
    scroll,
    prev,
    next,
    hide,
    width,
  };
};

export default useNavigateBtn;
