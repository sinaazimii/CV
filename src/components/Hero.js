import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Section from "./SectionWrapper";
import "./micros/Hero/scrollVelocity.css";
import ProfileCard from "./micros/Hero/profileCard";
import Introduction from "./micros/Hero/introduction";
import Skills from "./Skills";

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
      <div
        ref={heroRef}
        className="text-center"
        style={{
          ...styles.container,
          flexDirection:"column",
          textAlign: isMobile ? "center" : "start",
          padding: isMobile ? "30px 10px" : "0",
          height: isMobile ? "auto" : "100vh",
          position: "relative",
          overflow: "visible",
        }}
      >

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            width: isMobile ? "100%" : "80%",
            marginBottom: isMobile ? "0px" : "100px",
            marginTop: isMobile ? "0px" : "100px",
          }}
        >
          <div
            style={{
              ...styles.columnOne,
              margin: isMobile ? "50px 0 0 0" : "50px 0 0 50px",
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
            <Introduction isMobile={isMobile} />
          </div>

          <div
            style={{
              ...styles.columnTwo,
            }}
          >
            {!isMobile && 
            (<ProfileCard
              imageSrc={`${process.env.PUBLIC_URL}/me.png`}
              containerHeight={isMobile ? "300px" : "400px"}
              containerWidth={ isMobile ? "200px" : "250px"}
              imageHeight={isMobile ? "300px" : "400px"}
              imageWidth={ isMobile ? "200px" : "250px"}
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />)
            }
            


          </div>
        </div>

        {!isMobile && (<Skills />)}
        
      </div>
  );
};

export default Hero;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    overflowX: "hidden",
    position: "relative",
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
};



