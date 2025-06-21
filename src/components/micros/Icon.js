import { motion } from "framer-motion";

const SvgIcon = ({ svgPath, iconSize, containerSize }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.15,
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20%",
        padding: "10px",
        width: containerSize || "40px",
        height: containerSize || "40px",
        cursor: "pointer",
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
    </motion.div>
  );
};

export default SvgIcon;
