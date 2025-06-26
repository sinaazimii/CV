import Section from "./SectionWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import WorkSample from "./micros/Work/workSample";
import theme from "./theme";


const Picture = () => {
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
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
    }}>
        <img
          src={`${process.env.PUBLIC_URL}/me.png`}
            alt="Profile"
            style={{
                width:  "65vw" ,
                height: "50vh",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                }}
        />
        
    </div>
  );
};

export default Picture;

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
    flex: 1 / 5,
  },
  columnTwo: {
    display: "flex",
    flexDirection: "column",
    flex: 4 / 5,
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    color: theme.dark.color,
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
