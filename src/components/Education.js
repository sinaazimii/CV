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
        <motion.div
          style={styles.sampleBox}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <img
            src="/ufr.svg"
            alt="Freiburg University"
            style={{ width: "200px", height: "50px" }}
          />
          <p style={styles.courseTitle}>
            Ms.c Computer Science, University of Freiburg, Germany
          </p>
          <p style={styles.date}>2022-2025</p>
        </motion.div>
        <motion.div
          style={styles.sampleBox}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <img
            src="/su.jpg"
            alt="Shiraz University"
            style={{ width: "50px", height: "50px", marginLeft: "10px" }}
          />
          <p style={styles.courseTitle}>
            Bs.c Computer Science, Shiraz University, Iran
          </p>
          <p style={styles.date}>2016-2021</p>
        </motion.div>
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
    // backgroundColor: 'red',
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
