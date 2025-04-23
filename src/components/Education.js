import EducationItem from "./micros/educationItem";
import Section from "./SectionWrapper";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import LanguageProgress from "./LanguageProgress";

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
      <div
        style={{
          ...styles.container,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{...styles.row, flexDirection: isMobile? "column" : "row", marginTop: isMobile ? "0" : "5vh"}}>
          <div style={styles.columnOne}>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              style={{
                ...styles.title,
                fontSize: isMobile ? "7vw" : "3vw",
                marginLeft: isMobile ? "0px" : "10%",

              }}
            >
            Education
            </motion.h2>
          </div>

          <div
            style={{
              ...styles.columnTwo,
            }}
          >
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

        <div style={{...styles.row, flexDirection: isMobile? "column" : "row", marginTop: isMobile ? "0" : "5vh"}}>
          <div style={styles.columnOne}>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              style={{
                ...styles.title,
                fontSize: isMobile ? "7vw" : "3vw",
                marginLeft: isMobile ? "0px" : "10%",

              }}
            >
            Languages
            </motion.h2>
          </div>

          <div
            style={{
              ...styles.columnTwo,
            }}
          >
            <motion.div
              style={{
                ...styles.sampleBox,
                width: isMobile ? "90vw" : "42vw",
                hight: isMobile ? "10vh" : "22vh",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <p
                style={{
                  ...styles.languageTitle,
                  fontSize: isMobile ? "16px" : "17px",
                }}
              >
                English: C1 (IELTS Overall Band Score)
              </p>
              <LanguageProgress
                label="English: C1"
                target={90}
                isMobile={isMobile}
              />
              <p
                style={{
                  ...styles.languageTitle,
                  fontSize: isMobile ? "16px" : "17px",
                }}
              >
                German: A2
              </p>
              <LanguageProgress
                label="German: A2"
                target={30}
                isMobile={isMobile}
              />
              <p
                style={{
                  ...styles.languageTitle,
                  fontSize: isMobile ? "16px" : "17px",
                }}
              >
                Persian: Native
              </p>
              <LanguageProgress
                label="Persian: Native"
                target={100}
                isMobile={isMobile}
              />
            </motion.div>
          </div>
        </div>

        <div style={{ ...styles.rowTwo }}></div>
      </div>
    </Section>
  );
};

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
    alignItems: "start",
    justifyContent: "center",
    flex: 1 / 5,
    height: "100%",
  },
  columnTwo: {
    display: "flex",
    flexDirection: "column",
    flex: 4 / 5,
    alignItems: "center",
    justifyContent: "start",
    height: "100%",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontWeight: "bold",
    color: "#2e9fb1",
  },

  sampleBox: {
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
    fontWeight: "bold",
    color: "black",
    marginLeft: "10px",
  },
};
