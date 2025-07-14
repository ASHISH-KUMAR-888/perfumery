const IconSlider = () => {
  return (
    <>
      <div className="min-h-[250px] w-screen flex overflow-auto boxy mx-auto md:justify-center md:items-center md:gap-[30px] md:flex-wrap snap-x snap-mandatory">
        <div className="h-[250px] w-screen snap-start text-[#D2B071] bg-black flex flex-col justify-center items-center gap-[10px] shrink-[0] md:w-[270px]">
          <i className="fa-solid fa-truck text-[20px]"></i>

          <p className="text-[16px] font-[700] tracking-[.8px] mt-[14px] text-center">
            Shipping all over India
          </p>

          <p className="text-[15.5px] font-[300] tracking-[.6px] text-center">
            We are shipping all over PAN India
          </p>
        </div>

        <div className="h-[250px] w-full text-[#D2B071] snap-start bg-black flex flex-col justify-center items-center gap-[10px] shrink-[0] md:w-[270px]">
          <i className="fa-solid fa-envelope text-[20px]"></i>

          <p className="text-[16px] font-[700] tracking-[.8px] mt-[14px] text-center">
            Support
          </p>

          <p className="text-[15.5px] font-[300] tracking-[.6px] text-center">
            Contact us between 11:00 AM to 7:00 PM (Mon-Sat)
          </p>
        </div>

        <div className="h-[250px] w-full text-[#D2B071] snap-start bg-black flex flex-col justify-center items-center gap-[10px] shrink-[0] md:w-[270px]">
          <i className="fa-solid fa-image text-[20px]"></i>

          <p className="text-[16px] font-[700] tracking-[.8px] mt-[14px] text-center">
            Return / Replacement
          </p>

          <p className="text-[15.5px] font-[300] tracking-[.6px] text-center">
            Only accepted for damaged / defective received by the customer.
          </p>
        </div>

        <div className="h-[250px] w-full text-[#D2B071] snap-start bg-black flex flex-col justify-center items-center gap-[10px] shrink-[0] md:w-[270px]">
          <i className="fa-solid fa-shield-halved text-[20px]"></i>

          <p className="text-[16px] font-[700] tracking-[.8px] mt-[14px] text-center">
            100% Payment Secure
          </p>

          <p className="text-[15.5px] font-[300] tracking-[.6px] text-center">
            We ensure secure payment with PEV
          </p>
        </div>
      </div>
    </>
  );
};

export default IconSlider;
