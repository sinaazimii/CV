

const Section = ({ children, id, bgColor, height}) => {

  return (
    <div
      style={{ backgroundColor: bgColor, height: height }}
    >
      <div className="max-w-4xl w-full" >{children}</div>
    </div>
  );
};

export default Section;
