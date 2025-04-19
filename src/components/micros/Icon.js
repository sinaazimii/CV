const SvgIcon = ({ svgPath, iconSize, containerSize }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eff0f4",
        borderRadius: "50%",
        padding: "10px",
        width: containerSize || "40px",
        height: containerSize || "40px",
      }}
    >
      <img
        src={svgPath}
        alt="Icon"
        style={{
          width: iconSize || "24px",
          height: iconSize || "24px",
          margin: "10px",
        }}
      />
    </div>
  );
};

export default SvgIcon;
