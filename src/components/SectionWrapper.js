

const Section = ({ children, id, bgColor, height}) => {

  return (
    <div
      style={{ backgroundColor: bgColor, height: height, width:"100%" }}
    >
      <div>{children}</div>
    </div>
  );
};

export default Section;
