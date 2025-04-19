import { motion } from "framer-motion";
import SvgIcon from "./../Icon";

const SkillGroup = ({ title, icon, skillList }) => {
  return (
    <motion.div
    style={styles.skillBox}
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    <div style={styles.skillBoxHeader}>
      <SvgIcon svgPath={icon} />
      <p style={{ margin: "10px", fontWeight:'bold' }}>{title}</p>
    </div>
    <div style={styles.skillsList}>
      {skillList.map((tool) => (
        <p key={tool} style={{ margin: "10px" }}>
          {tool}
        </p>
      ))}
    </div>
  </motion.div>
  );
}

export default SkillGroup;


const styles = {
  skillBoxContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "20px",
  },

  skillBox: {
    height: "150px",
    width: "500px",
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "5px 10px",
    color: "#409ca9",
    fontSize: "16px",
    marginBottom: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },

  skillBoxHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  skillsList: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
  },
};
