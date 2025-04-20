import Section from "./SectionWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WorkSamples = () => {
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);  // 768px is typical for mobile breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
  <Section id="work" bgColor="#f6f6f6" height={"100vh"}>
    <div style={{...styles.container, flexDirection: isMobile ? "column" : "row", alignItems: isMobile?  'center' : "start", justifyContent:'center'}}>
        <div style={styles.columnOne}>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            style={{...styles.title, fontSize: isMobile ? "25px" : "60px", textAlign: "center", marginTop: isMobile? "20px" : "35px"}}
          >
            Work Samples
          </motion.h2>
        </div>

      <div style={styles.columnTwo}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{...styles.sampleBox, width: isMobile? "90vw":"45vw", height: isMobile? "22vh" :"45vh"}}
        >
          <img
            src={`${process.env.PUBLIC_URL}/bnmodviz.png`}
            alt="Sample 1"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{...styles.sampleBox, width: isMobile? "90vw":"45vw", height: isMobile? "22vh" :"45vh"}}   
        >
          <img
            src={`${process.env.PUBLIC_URL}/cpt.png`}
            alt="Sample 1"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </motion.div>
      </div>
    </div>
  </Section>
  );
}

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
    backgroundColor: "#deecee",
    borderRadius: "12px",
    padding: "5px 10px",
    color: "#409ca9",
    fontSize: "16px",
    marginBottom: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
};
