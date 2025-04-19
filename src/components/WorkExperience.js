import WorkItem from "./micros/workItem";
import Section from "./SectionWrapper";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const WorkExperience = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical for mobile breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Section id="work-experience" bgColor="#f6f6f6">
      <div style={{...styles.container, flexDirection: isMobile ? "column" : "row", alignItems: isMobile?  'center' : "start"}}>
        <div style={styles.columnOne}>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            style={{...styles.title, fontSize: isMobile ? "25px" : "60px", textAlign: "center", marginTop: isMobile? "20px" : "35px"}}
          >
            Work Experience
          </motion.h2>
        </div>

        <div style={{...styles.columnTwo, margin: isMobile ? "0px" : "50px"}}>
          <WorkItem
            title="Paid Master Thesis"
            place={"Hahn-Schickard, Freiburg, Germany"}
            period="Jan 2024 - May 2025"
            description="Worked on a project related to the analysis of complex systems using machine learning techniques."
            link="https://www.hahn-schickard.de/"
            logo="/hahn.svg"
            techs={" React, Flask, Git, Miro"}
            isMobile={isMobile}
          />
          <WorkItem
            title="Full Stack Developer (Work Student)"
            place={"Hahn-Schickard, Freiburg, Germany"}
            period="Aug 2024 - Dec 2024"
            description="Worked on a project related to the analysis of complex systems using machine learning techniques."
            link="https://www.hahn-schickard.de/"
            logo="/hahn.svg"
            techs={" React, Django, Flutter, Git, Docker"}
            isMobile={isMobile}
          />
          <WorkItem
            title="Software Developer (Work Student)"
            place={"Psiori GmbH, Freiburg, Germany"}
            period="Oct 2022 - May 2024"
            description="Worked on a project related to the analysis of complex systems using machine learning techniques."
            link="https://www.psiori.com/"
            logo="/psiori.png"
            techs={" Python, C++, Git, Docker, Jira, Linux, Bash"}
            isMobile={isMobile}
          />
        </div>
      </div>
    </Section>
  );
};

export default WorkExperience;

const styles = {
  container: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    color: "#f6f6f6",
    height: "100vh",
    textAlign: "center",
  },
  columnOne: {
    display: "flex",
    flexDirection: "column",
    flex: 1 / 5,
    alignItems: "center",
    justifyContent: "center",
    margin: "50px",
  },
  columnTwo: {
    display: "flex",
    flexDirection: "column",
    flex: 4 / 5,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'red',
  },

  title: {
    fontSize: "60px",
    fontWeight: "bold",
    color: "#2e9fb1",
  },
};
