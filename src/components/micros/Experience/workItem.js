import { motion } from "framer-motion";
import theme from "../../theme";

const skillsJobOne = [
  { name: "JavaScript", icon: `${process.env.PUBLIC_URL}/js.svg` },
  { name: "React", icon: `${process.env.PUBLIC_URL}/react.svg` },
  { name: "HTML", icon: `${process.env.PUBLIC_URL}/html.svg` },
  { name: "CSS", icon: `${process.env.PUBLIC_URL}/css.svg` },
  { name: "Git", icon: `${process.env.PUBLIC_URL}/git.svg` },
  { name: "Docker", icon: `${process.env.PUBLIC_URL}/docker.svg` },
];


const WorkItem = ({ title, place, period, logo, link, techs, isMobile, relatedSkills }) => {

  const isHeightLow = window.innerHeight < 750;

  return (
    <motion.div
      style={{...styles.sampleBox, width: isMobile ? "90vw" : "39vw", height: "28vh"}}
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
          alt={`${place} logo`}
          style={{ width: isMobile? "40px" :"70px", height: isMobile? "40px": "70px", margin: isMobile? "10px" : "10px", cursor: "pointer" }}
        />
      </a>
      <p style={{...styles.jobTitle, fontSize: isMobile ? "4vw" : "1vw"}}>
        {title}
      </p>
      {!isHeightLow && <p style={{...styles.jobPlace, fontSize: isMobile? "3vw" : "0.8vw" }}>{place}</p> }
      
      <p style={{...styles.date, fontSize: isMobile? "10px" : "14px"}}>{period}</p>
      <p style={{...styles.techs, fontSize: isMobile? "12px" : "16px"}}>Tech: {techs}</p>
      {/* <div style={{ display: "flex", gap: "2rem" }}>
          {skillsJobOne.map((skill, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "0.5rem",
                color: "#2e9fb1",
                fontWeight: "bold",
                fontSize: "1.2rem",
                minWidth: "80px",
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                style={{ width: "40px", height: "40px" }}
              />
              {skill.name}
            </div>
          ))}
        </div> */}
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
    height: "100vh",
    textAlign: "center",
  },
  sampleBox: {
    backgroundColor: theme.dark.cardBackground,
    borderRadius: "12px",
    padding: "5px 10px",
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
    color: theme.dark.color,
    marginLeft: "10px",
  },

  jobPlace: {
    color: theme.dark.color,
    marginLeft: "10px",
  },

  date: {
    color: theme.dark.color,
    marginLeft: "10px",
    fontWeight: "light",
  },

  techs: {
    marginLeft: "10px",
    color: theme.dark.linkColor,
  },
};
