import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import WorkItem from "./micros/Experience/workItem";
import Section from "./SectionWrapper";
import theme from "./theme";

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
    <Section>
      <div style={{...styles.container, flexDirection: isMobile ? "column" : "row", alignItems: isMobile?  'center' : "center", marginTop: isMobile ? "20px" : ""}}>
        <div style={{...styles.columnOne, margin: isMobile ? "0px" : "50px", flex: isMobile? 1/10 :1 / 5}}>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            style={{...styles.title, fontSize: isMobile ? "7vw" : "3vw", textAlign: "center", marginTop: isMobile? "10%" : "20%"}}
          >
            Work Experience
          </motion.h2>
        </div>

        <div style={{...styles.columnTwo, margin: isMobile ? "0px" : "50px"}}>
          <WorkItem
            title="Frontend Developer"
            place={"Hahn-Schickard, Freiburg, Germany"}
            period="Aug 2024 - Jun 2025"
            description="Worked on a project related to the analysis of complex systems using machine learning techniques."
            link="https://www.hahn-schickard.de/"
            logo={`${process.env.PUBLIC_URL}/hahn.svg`}
            techs={" React, Flask, Git, Docker, Miro"}
            isMobile={isMobile}
          />
          <WorkItem
            title="Software Developer (Work Student)"
            place={"Psiori GmbH, Freiburg, Germany"}
            period="Oct 2022 - May 2024"
            description="Worked on a project related to the analysis of complex systems using machine learning techniques."
            link="https://www.psiori.com/"
            logo={`${process.env.PUBLIC_URL}/psiori.svg`}
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
    height: "100vh",
    textAlign: "center",
  },
  columnOne: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  columnTwo: {
    display: "flex",
    flexDirection: "column",
    flex: 4 / 5,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: "60px",
    fontWeight: "bold",
    color: theme.dark.color,
    marginBottom: "15px",
  },
};
