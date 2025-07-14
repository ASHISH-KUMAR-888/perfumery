import { Link } from "react-router-dom";

const Button = ({ margin }) => {
  return (
    <>
      <div className={`flex justify-center items-center mt-[20px] ${margin}`}>
        <Link to="/view-all">
          <button className="a-btn relative py-[14px] px-[36px] bg-[#D2B070] text-black font-[700] tracking-[2px] z-[1] cursor-pointer hover:text-[#D2B070] border-[2px] border-[#D2B070]">
            VIEW ALL
          </button>
        </Link>
      </div>
    </>
  );
};

export default Button;
