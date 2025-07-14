const Footer = () => {
  return (
    <>
      <div className="min-h-[200px] w-screen bg-black text-[#89734A] flex flex-col justify-center gap-[30px] px-[20px] py-[40px] md:flex md:flex-row md:justify-between md:gap-[70px] md:flex-wrap md:px-[60px] lg:px-[40px]">
        <div className="flex flex-col justify-center gap-[10px]">
          <p className="text-[#D2B071] font-[800] tracking-[.8px]">
            Customer Care
          </p>
          <p className="font-[700]">
            Call :{" "}
            <a href="tel:9228152752" target="_blank" className="cursor-pointer">
              9228152752
            </a>
          </p>

          <p className="font-[700]">
            Email :{" "}
            <a
              href="mailto:support@xlncperfumery.com"
              title="support@xlncperfumery.com"
              target="_blank"
              className="cursor-pointer"
            >
              support@xlncperfumery.com
            </a>
          </p>

          <p className="font-[700]">Timing : 09:30 AM to 6:00 PM</p>
          <p className="font-[700]">
            WhatsApp :{" "}
            <a
              href="https://wa.link/noh332"
              title="https://wa.link/noh332"
              target="_blank"
              className="underline underline-offset-[8px] cursor-pointer"
            >
              {" "}
              +91 7069290388
            </a>
          </p>
        </div>

        <div className="flex flex-col justify-center gap-[10px] w-[185px]">
          <p className="text-[#D2B071] font-[800] tracking-[.8px]">Policies</p>
          <a className="text-[15px]" href="#">
            Privacy Policy
          </a>
          <a className="text-[15px]" href="#">
            Refund Policy
          </a>
          <a className="text-[15px]" href="#">
            Shipping Policy
          </a>
          <a className="text-[15px]" href="#">
            Terms Of Service
          </a>
        </div>

        <div className="flex flex-col justify-center gap-[10px] w-[320px]">
          <p className="text-[#D2B071] font-[800] tracking-[.8px]">
            Manufactured & Packed by:
          </p>
          <p className="text-[15px]">
            XLNC Perfumery G-28, Shubhlaxmi Complex, Near Pantaloons, City Light
            Town, Athwa, Surat, Gujarat 395007
          </p>
          <p className="text-[15px]">Country of Origin: India</p>
        </div>

        <div className="flex flex-col justify-center gap-[10px] ">
          <p className="text-[#D2B071] font-[800] tracking-[.8px]">
            Work With Us
          </p>
          <a className="text-[15px]" href="#">
            Distributor & Super Stockist
          </a>
          <a className="text-[15px]" href="#">
            Bulk Order
          </a>
          <a className="text-[15px]" href="#">
            Influencers/Collabration
          </a>
        </div>

        <div className="flex flex-col justify-center gap-[10px] w-[320px]">
          <p className="text-[#D2B071] font-[800] tracking-[.8px]">
            Newsletter
          </p>
          <p className="text-[15px]">
            Sign up to our newsletter to receive exclusive offers.
          </p>
          <input
            type="text"
            placeholder="E-mail"
            className="py-[13px] px-[10px] outline-none text-[#D2B071] border-[3px] border-[#201A11] transition-all duration-300 ease-in-out hover:border-[#D2AF72] bg-black font-[850] tracking-[.4px] placeholder:text-[#7E6A44] placeholder:font-[900] placeholder:tracking-[1px] mt-[13px]"
          />
          <button className="h-[55px] w-[160px] bg-[#D2B071] text-black font-[800] tracking-[.8px] mt-[20px] cursor-pointer border-2 border-[#D2B071] transition-all duration-300 ease-in-out footer-btnn">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="h-[100px] w-screen bg-black text-[#89734A] px-[20px] flex flex-col gap-[20px] md:px-[60px] lg:px-[40px]">
        <i className="fa-brands fa-instagram md:text-[22px] lg:text-[24px] xl:text-[26px]"></i>

        <p className="text-[16px] font-[300] relative text-center lg:text-start">
          © 2025 - XLNC Perfumery
          <span className="text-[1px] absolute top-[3px] ">TM</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
