import { motion } from "framer-motion";

const WorkItem = ({ title, place, period, logo, link, techs, isMobile }) => {
  return (
    <motion.div
      style={{...styles.sampleBox, width: isMobile ? "350px" : "800px", height: isMobile ? "210px" : "240px"}}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={logo}
          alt={`${place} logo`}
          style={{ width: isMobile? "40px" :"50px", height: isMobile? "40px": "50px", margin: isMobile? "10px" : "10px", cursor: "pointer" }}
        />
      </a>
      <p style={{...styles.jobTitle, fontSize: isMobile ? "14px" : "20px"}}>
        {title}
        
      </p>
      <p style={{...styles.jobPlace, fontSize: isMobile? "13px" : "17px" }}>{place}</p>
      <p style={{...styles.date, fontSize: isMobile? "10px" : "14px"}}>{period}</p>
      <p style={{...styles.techs, fontSize: isMobile? "12px" : "16px"}}>Tech:{techs}</p>
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
    fontWeight: "bold",
    color: "black",
    marginLeft: "10px",
  },

  jobPlace: {
    color: "black",
    marginLeft: "10px",
  },

  date: {
    color: "black",
    marginLeft: "10px",
    fontWeight: "light",
  },

  techs: {
    marginLeft: "10px",
  },
};
