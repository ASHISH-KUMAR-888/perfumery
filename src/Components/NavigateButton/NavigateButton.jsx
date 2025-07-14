const NavigateButton = ({ Symbol, Pos, btn }) => {
  return (
    <div
      className={`h-[50px] w-[50px] bg-black opacity-[0] group-hover:opacity-[1] rounded-[50%] cursor-pointer text-[#D2B071] flex flex-col justify-center items-center absolute top-[50%] ${Pos} translate-y-[-150%] transition-all duration-300 ease-in-out hover:bg-[#D2B071] hover:text-black`}
      onClick={btn}
    >
      <i className={`fa-solid ${Symbol} text-[23px] font-[900]`}></i>
    </div>
  );
};

export default NavigateButton;
