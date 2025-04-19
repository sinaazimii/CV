import { motion } from "framer-motion";

const WorkItem = ({ title, place, period, logo, link, techs }) => {
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
          alt={`${place} logo`}
          style={{ width: "50px", height: "50px", margin: "10px", cursor: "pointer" }}
        />
      </a>
      <p style={styles.jobTitle}>
        {title}
        
      </p>
      <p style={styles.jobPlace}>{place}</p>
      <p style={styles.date}>{period}</p>
      <p style={styles.techs}>Tech:{techs}</p>
    </motion.div>
  );
};

export default WorkItem;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start",
    color: "#f6f6f6",
    height: "100vh",
    textAlign: "center",
  },
  sampleBox: {
    // height: "230px",
    width: "800px",
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "5px 10px",
    color: "#409ca9",
    fontSize: "16px",
    marginBottom: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    alignItems: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
  },

  jobTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    marginLeft: "10px",
  },

  jobPlace: {
    fontSize: "18px",
    color: "black",
    marginLeft: "10px",
  },

  date: {
    fontSize: "14px",
    color: "black",
    marginLeft: "10px",
    fontWeight: "light",
  },

  techs: {
    fontSize: "16px",
    marginLeft: "10px",
  },
};
