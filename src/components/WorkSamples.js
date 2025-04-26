import Section from "./SectionWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectsCarousel from "./micros/projectsCarousel";

const WorkSamples = () => {
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
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "center",
          justifyContent: "center",
          
        }}
      >
        <div style={{ ...styles.columnOne, flex: isMobile ? 1.5 / 10 : 1 / 5}}>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            style={{
              ...styles.title,
              fontSize: isMobile ? "7vw" : "3vw",
              textAlign: "center",
              marginTop: isMobile ? "20px" : "35px",
            }}
          >
            Work Samples
          </motion.h2>
        </div>

        <div style={{...styles.columnTwo, flex: isMobile ? 8.5 / 10 : 4 / 5, justifyContent: isMobile ? "start" : "center"}}>
          <div
            style={{
              display: "flex",
              backgroundColor: "red",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: isMobile? "90vw":"65vw",
              height:  isMobile? "70vh":"88vh",
              borderRadius: "10px",
              border: "2px solid #2e9fb1",
              backgroundColor: "#deecee",
              padding: "10px",
              marginRight: isMobile? "0" : "50px",
            }}
          >
            <ProjectsCarousel />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WorkSamples;

// define styles for this component
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    color: "#f6f6f6",
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
  },

  title: {
    fontWeight: "bold",
    color: "#2e9fb1",
  },

  sampleBox: {
    backgroundColor: "#deecee",
    borderRadius: "12px",
    padding: "5px 10px",
    color: "#409ca9",
    marginBottom: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
};
