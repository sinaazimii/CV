import Section from "./SectionWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import WorkSample from "./micros/Work/workSample";


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


const items = [
    {
      id: 1,
      title: "Bayesian Networks Modelling and Visualization Tool",
      description:
        "Designed and built an AI-powered Bayesian Network modeling tool using React and Flask, tailored for clinical usability and intuitive decision support",
      image: `${process.env.PUBLIC_URL}/bnmodviz.png`,
      size: isMobile
        ? { width: "95%", height: "16vh" }
        : { width: "95%", height: "25vh" },
    },
    {
      id: 2,
      title: "Probabilistic Modeling Tool",
      description:
        "Modernized a medical Bayesian Network Modeling tool using React and Django, significantly improving UX and accessibility for clinical users.",
      image: `${process.env.PUBLIC_URL}/cpt.png`,
      size: isMobile
        ? { width: "95%", height: "16vh" }
        : { width: "95%", height: "25vh" },
    },
    // {
    //   id: 3,
    //   title: "Bookstore",
    //   description:
    //     "An online bookstore application with a user-friendly interface, allowing users to browse, search, and purchase books.",
    //   image: `${process.env.PUBLIC_URL}/bookstore.jpg`,
    //   size: isMobile
    //     ? { width: "95%", height: "40vh" }
    //     : { width: "95%", height: "60vh" },
    // },
  ];

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
        <div style={{ ...styles.columnOne, flex: isMobile ? 1.5 / 10 : 4 / 5 }}>
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
        <div
          style={{
            ...styles.columnTwo,
            flex: isMobile ? 8.5 / 10 : 4 / 5,
            paddingTop: isMobile ? "0vh" : "5vh",
          }}
        >
          {items.map((item) => (
            <WorkSample
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              size={item.size}
              isMobile={isMobile}
            />
          ))}
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
