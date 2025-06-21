import { motion } from "framer-motion";
import theme from "../../theme";

const EducationItem = ({
  title,
  degree,
  logo,
  period,
  logoSize,
  link,
  isMobile,
  margin
}) => {
  return (
    <motion.div
      style={{
        ...styles.sampleBox,
        width: isMobile ? "90vw" : "42vw",
        height: isMobile ? "26vh" : "25vh",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      whileHover={{
        scale: 1.1,
        y: 5,
      }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={logo}
          alt={`${title} logo`}
          style={{
            width: logoSize.width,
            height: logoSize.height,
            marginLeft: "10px",
            scale: 2,
            margin: margin,
          }}
        />
      </a>
      <p
        style={{
          ...styles.courseTitle,
          fontSize: isMobile ? "4vw" : "1vw",
          marginBottom: "10px",
        }}
      >
        {degree}
      </p>
      <p style={{ ...styles.courseTitle, fontSize: isMobile ? "4vw" : "1vw" }}>
        {title}
      </p>
      <p style={{ ...styles.date, fontSize: isMobile ? "10px" : "14px" }}>
        {period}
      </p>
    </motion.div>
  );
};

export default EducationItem;

const styles = {
  sampleBox: {
    backgroundColor: theme.dark.cardBackground,
    borderRadius: "12px",
    padding: "5px 10px",
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
    color: theme.dark.color,
    marginLeft: "10px",
    textAlign: "left",
  },
  date: {
    fontSize: "15px",
    color: theme.dark.color,
    marginLeft: "10px",
  },
};
