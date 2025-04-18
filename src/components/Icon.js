const SvgIcon = ({ svgPath }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eff0f4",
        borderRadius: "50%",
        padding: "10px",
        width: "40px",
        height: "40px",
      }}
    >
      <img
        src={svgPath}
        alt="Icon"
        style={{
          width: "24px",
          height: "24px",
          margin: "10px",
        }}
      />
    </div>
  );
};

export default SvgIcon;
