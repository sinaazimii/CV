import { motion } from "framer-motion";

const WorkSample = ({
  title,
  description,
  image,
  size,

  isMobile,
}) => {
  return (
    <motion.div
      style={{
        ...styles.sampleBox,
        width: isMobile ? "90vw" : "30vw",
        minHeight: isMobile ? "10vh" : "32vh",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <motion.img
        src={image}
        alt={`${title} logo`}
        style={{
          width: size.width,
          height: size.height,
          borderRadius: "8px",
          marginLeft: "10px",
        }}
        whileHover={{
            scale: 1.05,
            y: -5,
            }}
        transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            }}
      />
      <p
        style={{
          ...styles.courseTitle,
          fontSize: isMobile ? "4vw" : "1.2vw",
          marginBottom: "10px",
        }}
      >
        {title}
      </p>
      <p style={{ ...styles.date, fontSize: isMobile ? "10px" : "14px" }}>
        {description}
      </p>
    </motion.div>
  );
};

export default WorkSample;

const styles = {
  sampleBox: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "20px",
    color: "#409ca9",
    fontSize: "16px",
    marginBottom: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    alignItems: "start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  courseTitle: {
    fontWeight: "bold",
    color: "black",
    marginLeft: "10px",
    textAlign: "left",
  },
  date: {
    fontSize: "15px",
    color: "black",
    marginLeft: "10px",
  },
};
