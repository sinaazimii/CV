import EducationItem from "./micros/Education/educationItem";
import Section from "./SectionWrapper";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import LanguageProgress from "./LanguageProgress";
import theme from "./theme";

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
    <Section>
      <div
        style={{
          ...styles.container,
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <div
          style={{
            ...styles.rowOne,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <div style={styles.columnOne}>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              style={{
                ...styles.title,
                fontSize: isMobile ? "7vw" : "3vw",
                margin: isMobile ? "0 0 20% 0" : "0 0 0 10%",
              }}
            >
              Education
            </motion.h2>
          </div>

          <div
            style={{
              ...styles.columnTwo,
              paddingTop: isMobile ? "0vh" : "5vh",
              // marginBottom: '-20px',
            }}
          >
            <EducationItem
              title="Computer Science,  University of Freiburg, Germany"
              degree={"Master of Science"}
              logo={`${process.env.PUBLIC_URL}/ufr.svg`}
              logoSize={{
                width: isMobile ? "45vw" : "7vw",
                height: isMobile ? "10vh" : "7vh",
               }}
              period="2022 - 2025"
              link="https://www.uni-freiburg.de/"
              isMobile={isMobile}
            />
            <EducationItem
              title="Computer Engineering, Shiraz University, Iran"
              degree={"Bachelor of Science"}
              logo={`${process.env.PUBLIC_URL}/su.svg`}
              logoSize={{
                width: isMobile ? "20vw" : "5vw",
                height: isMobile ? "5vh" : "5vh",
              }}
              period="2016 - 2021"
              link="https://shirazu.ac.ir/en/home"
              isMobile={isMobile}
              margin="0 0 10px 20px"
            />
          </div>
        </div>

        <div
          style={{
            ...styles.rowTwo,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <div style={styles.columnOne}>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              style={{
                ...styles.title,
                fontSize: isMobile ? "7vw" : "3vw",
                margin: isMobile ? "0 0 20% 0" : "0 0 0 10%",
              }}
            >
              Languages
            </motion.h2>
          </div>

          <div
            style={{
              ...styles.columnTwo,
              paddingTop: isMobile ? "0vh" : "5vh",
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
              whileHover={{
                scale: 1.1,
                y: 5,
              }}
            >
              <p
                style={{
                  ...styles.languageTitle,
                  fontSize: isMobile ? "13px" : "17px",
                }}
              >
                English: C1 (IELTS Overall Band Score 7.5)
              </p>
              <LanguageProgress
                label="English: C1"
                target={90}
                isMobile={isMobile}
              />
              <p
                style={{
                  ...styles.languageTitle,
                  fontSize: isMobile ? "13px" : "17px",
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
                  fontSize: isMobile ? "13px" : "17px",
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
      </div>
    </Section>
  );
};

export default Education;

const styles = {
  container: {
    display: "flex",
    textAlign: "center",
    overflow: "hidden",
    height: "100%",
  },
  columnOne: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    flex: 1 / 5,
  },
  columnTwo: {
    display: "flex",
    flexDirection: "column",
    flex: 4 / 5,
    alignItems: "center",
    justifyContent: "start",
  },

  rowOne: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  rowTwo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontWeight: "bold",
    color: theme.dark.color,
  },

  sampleBox: {
    backgroundColor: theme.dark.cardBackground,
    borderRadius: "12px",
    padding: "5px 10px",
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
    color: theme.dark.color,
    marginLeft: "10px",
  },
};
