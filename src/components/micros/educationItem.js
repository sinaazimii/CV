import { motion } from "framer-motion";
import { text } from "framer-motion/client";

const EducationItem = ({ title, degree, logo, period, logoSize, link, isMobile }) => {
  return (
    <motion.div
      style={{...styles.sampleBox, width: isMobile ? "90vw" : "42vw", minHeight: isMobile ? "10vh" : "22vh"}}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    >
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={logo}
        alt={`${title} logo`}
        style={{ width: logoSize.width, height: logoSize.height, marginLeft: "10px" }}
      />
    </a>
      <p style={{...styles.courseTitle, fontSize: isMobile? "13px" : "17px"}}>{degree}</p>
      <p style={{...styles.courseTitle, fontSize: isMobile? "13px" : "17px" }}>{title}</p>
      <p style={{...styles.date, fontSize: isMobile? "10px" : "14px"}}>{period}</p>
    </motion.div>
  );
};

export default EducationItem;


const styles = {
    sampleBox: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "5px 10px",
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
      fontSize: "20px",
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
  