import React, { useState, useEffect } from "react";
import ScrollVelocity from "./micros/Hero/scrollVelocity";
import theme from "./theme";

const skills = [
  { name: "JavaScript", icon: `${process.env.PUBLIC_URL}/js.svg` },
  { name: "React", icon: `${process.env.PUBLIC_URL}/react.svg` },
  { name: "TypeScript", icon: `${process.env.PUBLIC_URL}/ts.svg` },
  { name: "Next.js", icon: `${process.env.PUBLIC_URL}/next.svg` },
  { name: "HTML", icon: `${process.env.PUBLIC_URL}/html.svg` },
  { name: "CSS", icon: `${process.env.PUBLIC_URL}/css.svg` },
  { name: "Git", icon: `${process.env.PUBLIC_URL}/git.svg` },
  { name: "Docker", icon: `${process.env.PUBLIC_URL}/docker.svg` },
  { name: "Ubuntu", icon: `${process.env.PUBLIC_URL}/ubuntu.svg` },
  { name: "Jira", icon: `${process.env.PUBLIC_URL}/jira.svg` },
];

const Skills = () => {
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
  <div
    style={{
      width: isMobile ? "100vw" : "60%",
      height: isMobile ? "100px" : "100px",
      left: isMobile ? "0" : "20%",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <ScrollVelocity
      texts={[
        <div style={{ display: "flex", gap: "2rem" }}>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "0.5rem",
                color: theme.dark.color,
                fontWeight: "bold",
                fontSize: "1.2rem",
                minWidth: "80px",
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                style={{ width: "40px", height: "40px" }}
              />
              {skill.name}
            </div>
          ))}
        </div>,
      ]}
      velocity={50}
      className="custom-scroll-text"
      scrollerStyle={{
        display: "flex",
        alignItems: "center",
        gap: "3rem",
      }}
    />
  </div>
  );
};

export default Skills;