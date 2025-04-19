import { motion } from "framer-motion";

const EducationItem = ({ title, logo, period, logoSize, link }) => {
  return (
    <motion.div
      style={styles.sampleBox}
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
      <p style={styles.courseTitle}>{title}</p>
      <p style={styles.date}>{period}</p>
    </motion.div>
  );
};

export default EducationItem;


const styles = {
    sampleBox: {
      height: "200px",
      width: "800px",
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
    },
    date: {
      fontSize: "15px",
      color: "black",
      marginLeft: "10px",
    },
  };
  