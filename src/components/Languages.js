import Section from "./SectionWrapper";
import { motion } from "framer-motion";
import ProgressBar from "react-bootstrap/ProgressBar";
import LanguageProgress from "./LanguageProgress";
const Languages = () => (
  <Section id="languages" bgColor="#f6f6f6">
    <div style={styles.container}>
      <div style={styles.columnOne}>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={styles.title}
        >
          Languages
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
          <p style={styles.languageTitle}>
            English: C1 (IELTS Overall Band Score)
          </p>
          <LanguageProgress label="English: C1" target={90} />
          <p style={styles.languageTitle}>German: A2</p>
          <LanguageProgress label="German: A2" target={30} />
          <p style={styles.languageTitle}>Persian: Native</p>
          <LanguageProgress label="Persian: Native" target={100} />
        </motion.div>
      </div>
    </div>
  </Section>
);

export default Languages;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start",
    color: "#f6f6f6",
    // height: "35vh",
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
    // height: "170px",
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

  languageTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    marginLeft: "10px",
  },
};
