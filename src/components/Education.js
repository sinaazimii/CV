import EducationItem from "./micros/educationItem";
import Section from "./SectionWrapper";
import { motion } from "framer-motion";

const Education = () => (
  <Section id="education" bgColor="#f6f6f6">
    <div style={styles.container}>
      <div style={styles.columnOne}>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={styles.title}
        >
          Education
        </motion.h2>
      </div>

      <div style={styles.columnTwo}>

      <EducationItem
          title="Master of Science in Computer Science,  University of Freiburg, Germany"
          logo="/ufr.svg"
          logoSize={{ width: "150px", height: "50px" }}
          period="2022 - 2025"
          link="https://www.uni-freiburg.de/"
        />
        <EducationItem
          title="Bachelor of Science in Computer Engineering, Shiraz University, Iran"
          logo="/su.jpg"
          logoSize={{ width: "50px", height: "50px" }}
          period="2016 - 2021"
          link="https://shirazu.ac.ir/en/home"
        />

      </div>
    </div>
  </Section>
);

export default Education;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start",
    color: "#f6f6f6",
    height: "57vh",
    textAlign: "center",
  },
  columnOne: {
    display: "flex",
    flexDirection: "column",
    flex: 1 / 5,
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "50px",
  },
  columnTwo: {
    display: "flex",
    flexDirection: "column",
    flex: 4 / 5,
    alignItems: "center",
    justifyContent: "start",
    margin: "50px",
  },

  title: {
    fontSize: "60px",
    fontWeight: "bold",
    color: "#2e9fb1",
  },

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
};
