const Text = ({
  text = "hello",
  font = "font-[500]",
  size = "text-[16px]",
  style,
}) => {
  return (
    <p
      className={`text-center text-[#D2B071] mb-[16px] ${font} ${size} ${style}`}
    >
      {text}
    </p>
  );
};

export default Text;
