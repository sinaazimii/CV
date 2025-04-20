import EducationItem from "./micros/educationItem";
import Section from "./SectionWrapper";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Education = () => {
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
  <Section id="education" bgColor="#f6f6f6">
    <div style={{...styles.container, flexDirection: isMobile ? "column" : "row", alignItems: isMobile?  'center' : "start",}}>
      <div style={{...styles.columnOne, flex: isMobile ? 1/10 : 1 / 5, margin: isMobile ? "0px" : "50px"}}>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            style={{...styles.title, fontSize: isMobile ? "25px" : "60px", textAlign: "center", marginTop: isMobile? "20px" : "35px"}}
          >
            Education
          </motion.h2>
      </div>

      <div style={styles.columnTwo}>

      <EducationItem
          title="Computer Science,  University of Freiburg, Germany"
          degree={"Master of Science"}
          logo={`${process.env.PUBLIC_URL}/ufr.svg`}
          logoSize={{ width: "150px", height: "50px" }}
          period="2022 - 2025"
          link="https://www.uni-freiburg.de/"
          isMobile={isMobile}
        />
        <EducationItem
          title="Computer Engineering, Shiraz University, Iran"
          degree={"Bachelor of Science"}
          logo={`${process.env.PUBLIC_URL}/su.jpg`}
          logoSize={{ width: "50px", height: "50px" }}
          period="2016 - 2021"
          link="https://shirazu.ac.ir/en/home"
          isMobile={isMobile}
        />

      </div>
    </div>
  </Section>
  );
}

export default Education;

const styles = {
  container: {
    display: "flex",
    color: "#f6f6f6",
    height: "57vh",
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
