import WorkItem from "./micros/workItem";
import Section from "./SectionWrapper";
import { motion } from "framer-motion";

const WorkExperience = () => (
  <Section id="work-experience" bgColor="#f6f6f6">
    <div style={styles.container}>
      <div style={styles.columnOne}>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={styles.title}
        >
          Work Experience
        </motion.h2>
      </div>

      <div style={styles.columnTwo}>
        <WorkItem
            title="Paid Master Thesis"
            place={"Hahn-Schickard, Freiburg, Germany"}
            period="Jan 2024 - May 2025"
            description="Worked on a project related to the analysis of complex systems using machine learning techniques."
            link="https://www.hahn-schickard.de/"
            logo="/hahn.svg"
            techs={" React, Flask, Git, Miro"}
        />
        <WorkItem
            title="Full Stack Developer (Work Student)"
            place={"Hahn-Schickard, Freiburg, Germany"}
            period="Aug 2024 - Dec 2024"
            description="Worked on a project related to the analysis of complex systems using machine learning techniques."
            link="https://www.hahn-schickard.de/"
            logo="/hahn.svg"
            techs={" React, Django, Flutter, Git, Docker"}
        />
        <WorkItem
            title="Software Developer (Work Student)"
            place={"Psiori GmbH, Freiburg, Germany"}
            period="Oct 2022 - May 2024"
            description="Worked on a project related to the analysis of complex systems using machine learning techniques."
            link="https://www.psiori.com/"
            logo="/psiori.png"
            techs={" Python, C++, Git, Docker, Jira, Linux, Bash"}
        />

      </div>
    </div>
  </Section>
);

export default WorkExperience;

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
};
