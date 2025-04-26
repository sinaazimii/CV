import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SvgIcon from "./micros/Icon";
import Section from "./SectionWrapper";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical for mobile breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { amount: 0.5 });

  return (
    <Section>
      <div
        ref={heroRef}
        className="text-center"
        style={{
          ...styles.container,
          flexDirection: isMobile ? "column" : "row",
          textAlign: isMobile ? "center" : "start",
          padding: isMobile ? "30px 10px" : "0",
          height: isMobile ? "auto" : "100vh",
        }}
      >
        {isInView && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isMobile ? "90vw" : "60vw" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              ...styles.headerContainer,
              height: isMobile ? "50px" : "100px",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "8vw" : "2vw",
                color: "#f6f6f6",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              Seyed Sina Azimi
            </h2>
          </motion.div>
        )}

        <div
          style={{
            ...styles.columnOne,
            margin: isMobile ? "50px 0 0 0" : "50px 0 0 50px",
            alignItems: isMobile? "center" : 'flex-start',
          }}
        >

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
              style={{...styles.capsule, fontSize: isMobile ? "4vw" : "1vw"}}
            >
              <i className="bi bi-dot"></i> Available for work
            </motion.div>

          <div style={styles.titleContainer}>
            <p
              style={{
                ...styles.title,
                fontSize: isMobile ? "1.5rem" : "3rem",
              }}
            >
              <Typewriter
                words={["Hi, I'm a Frontend Developer"]}
                typeSpeed={90}
                delaySpeed={2000}
              />
            </p>
          </div>
          <p
            style={{
              ...styles.subtitle,
              fontSize: isMobile ? "1rem" : "1.5rem",
            }}
          >
            Recently graduated master student in Computer Science from a top
            university and ready to dedicate my full time focus to frontend
            development.
          </p>
        </div>
        <div
          style={{ ...styles.columnTwo, marginTop: isMobile ? "0" : "50px" }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/me.png`}
            alt="Profile"
            style={{
              width: isMobile ? "50vw" : "13vw",
              height: "auto",
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            style={{
              ...styles.socialMediaContainer,
              marginTop: isMobile ? "0px" : "20px",
            }}
          >
            <a
              href="https://github.com/sinaazimii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon
                svgPath={`${process.env.PUBLIC_URL}/github.svg`}
                containerSize={"50px"}
                iconSize={"30px"}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sinaazimii/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon
                svgPath={`${process.env.PUBLIC_URL}/linkedin.svg`}
                containerSize={"50px"}
                iconSize={"30px"}
              />
            </a>
            <a href="mailto:your.email@example.com?subject=Let's%20Talk&body=Hi%20Sina,%0D%0AI'm%20interested%20in%20your%20work!">
              <SvgIcon
                svgPath={`${process.env.PUBLIC_URL}/mail.svg`}
                containerSize={"50px"}
                iconSize={"30px"}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    color: "#f6f6f6",
    textAlign: "center",
    overflowX: "hidden",
    height: "100vh",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#2e9fb1",
    position: "absolute",
    top: "10px",
    borderRadius: "12px",
    color: "#f6f6f6",
    fontSize: "16px",
    marginBottom: "20px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
  },
  titleContainer: {
    display: "flex",
    height: "100px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  columnOne: {
    display: "flex",
    flexDirection: "column",
    flex: 1 / 2,
    textAlign: "start",
    // margin: "50px 0 0 50px",
  },
  columnTwo: {
    display: "flex",
    flexDirection: "column",
    flex: 1 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  capsule: {
    backgroundColor: "#deecee",
    borderRadius: "12px",
    padding: "8px",
    color: "#409ca9",
    margin: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#2e9fb1",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#2e9fb1",
  },
  socialMediaContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100px",
    justifyContent: "center",
    textAlign: "start",
    gap: "2vw",
    alignItems: "center",
  },
};
