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
  const isInView = useInView(heroRef, { amount: 0.5 }); // Trigger when 50% visible
  

  return (
    <Section id="hero" bgColor="#f6f6f6" height={"100vh"} ref={heroRef}>
      <div
      ref={heroRef}
        className="text-center"
        style={{
          ...styles.container,
          flexDirection: isMobile ? "column" : "row",
          textAlign: isMobile ? "center" : "start",
          padding: isMobile ? "30px 10px" : "0",
        }}
      >
        {isInView && (<motion.div
          initial={{ width: 0 }}
          animate={{ width: isMobile ? "90vw" : "60vw" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{...styles.headerContainer, height: isMobile ? "50px" : "100px"}}
        >
          <h2
            style={{
              fontSize: isMobile ? "1.5rem" : "3rem",
              color: "#f6f6f6",
              fontWeight: "bold",
              whiteSpace: "nowrap"
            }}
          >
            Seyed Sina Azimi
          </h2>
        </motion.div>)}
        
        <div style={styles.columnOne}>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            style={styles.capsule}
          >
            <i className="bi bi-dot"></i> Available for work
          </motion.div>

          <div style={styles.titleContainer}>
            <p
              style={{ ...styles.title, fontSize: isMobile ? "2rem" : "3rem" }}
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
              fontSize: isMobile ? "1.2rem" : "1.5rem",
            }}
          >
            I Recently graduated master student in Computer Science from a top
            university and ready to dedicate my full time focus to frontend
            development.
          </p>
        </div>
        <div style={{...styles.columnTwo, marginTop: isMobile ? "0" : "50px"}}>
          <img
            src="/me.png"
            alt="Profile"
            style={{
              width: isMobile ? "180px" : "250px",
              height: "auto",
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            style={{...styles.socialMediaContainer, marginTop: isMobile? "0px" : "20px",}}
          >
            <a
              href="https://github.com/sinaazimii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon
                svgPath="/github.svg"
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
                svgPath="/linkedin.svg"
                containerSize={"50px"}
                iconSize={"30px"}
              />
            </a>
            <a href="mailto:your.email@example.com?subject=Let's%20Talk&body=Hi%20Sina,%0D%0AI'm%20interested%20in%20your%20work!">
              <SvgIcon
                svgPath="/mail.svg"
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
    height: "100vh",
    width: "100vw",
    backgroundColor: "red",
    textAlign: "center",
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
    alignItems: "flex-start",
    textAlign: "start",
    margin: "50px 0 0 50px",
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
    fontSize: "16px",
    marginBottom: "20px",
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
    marginBottom: "20px",
    color: "#2e9fb1",
  },
  socialMediaContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100px",
    width: "100px",
    justifyContent: "center",
    textAlign: "start",
    gap: "20px",
    alignItems: "center",
  },
};
