import Section from "./SectionWrapper";
import { motion } from "framer-motion";
import SkillGroup from "./micros/skillGroup";
import { useState, useEffect } from "react";

const languages = ["JavaScript", "Python", "Java", "HTML", "CSS"];

const tools = ["Git", "Docker", "Jira", "Figma"];

const frameworks = ["React", "React Native", "Flutter", "Bootstrap"];

const softSkills = [
  "Focused",
  "Detail-oriented",
  "Communication",
  "Problem-solving",
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
    <Section>
        <div
          style={{ ...styles.container, padding: isMobile ? "10px" : "20px" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            style={{
              ...styles.rowOne,
              margin: isMobile ? "0" : "50px 0 100px 0",
              width: isMobile ? "100%" : "80%",
              flex: isMobile ? 1 / 15 : 1 / 5,
            }}
          >
            <p
              style={{
                ...styles.explain,
                fontSize: isMobile ? "4vw" : "1.5vw",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              I'm passionate about solving complex challenges and take pride in
              developing responsive, intuitive, and user-centered applications
              that deliver real value.
            </p>
          </motion.div>
          {isMobile && (
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                style={{
                  ...styles.title,
                  fontSize: "7vw",
                  marginTop: "20px",
                  textAlign: "center",
                }}
              >
                Skills
              </motion.h2>
            </div>
          )}
          <div style={{ ...styles.rowTwo, width: isMobile ? "100%" : "80%", flex: isMobile ? 14 / 15 : 4 / 5, alignItems: isMobile ? "start" : "center"}}>
            {!isMobile && (
              <div style={styles.titleContainer}>
                <motion.h2
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{...styles.title, marginLeft: "-10vw", fontSize: "3vw"}}
                >
                  Skills
                </motion.h2>
              </div>
            )}
            {!isMobile ? (
              <div style={styles.skillContainer}>
                <div style={styles.skillBoxContainer}>
                  <SkillGroup
                    title="Languages"
                    icon={`${process.env.PUBLIC_URL}/code.svg`}
                    skillList={languages}
                  />
                  <SkillGroup
                    title="Tools"
                    icon={`${process.env.PUBLIC_URL}/gear.svg`}
                    skillList={tools}
                  />
                </div>
                <div style={styles.skillBoxContainer}>
                  <SkillGroup
                    title="Frameworks"
                    icon={`${process.env.PUBLIC_URL}/framework.svg`}
                    skillList={frameworks}
                  />
                  <SkillGroup
                    title="Soft Skills"
                    icon={`${process.env.PUBLIC_URL}/people.svg`}
                    skillList={softSkills}
                  />
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <SkillGroup
                  title="Languages"
                  icon={`${process.env.PUBLIC_URL}/code.svg`}
                  skillList={languages}
                  isMobile={isMobile}
                />
                <SkillGroup
                  title="Tools"
                  icon={`${process.env.PUBLIC_URL}/gear.svg`}
                  skillList={tools}
                  isMobile={isMobile}
                />
                <SkillGroup
                  title="Frameworks"
                  icon={`${process.env.PUBLIC_URL}/framework.svg`}
                  skillList={frameworks}
                  isMobile={isMobile}
                />
                <SkillGroup
                  title="Soft Skills"
                  icon={`${process.env.PUBLIC_URL}/people.svg`}
                  skillList={softSkills}
                  isMobile={isMobile}
                />
              </div>
            )}
          </div>
        </div>
    </Section>
  );
};

export default Skills;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#f6f6f6",
    padding: "10px",
    height: "100vh",
  },

  explain: {
    fontSize: "31px",
    color: "white",
    margin: "1.5vw",
  },

  titleContainer: {
    display: "flex",
    flex: 1 / 4,
    alignItems: "start",
    justifyContent: "center",
    // marginLeft: "20px",
  },

  title: {
    fontWeight: "bold",
    color: "#2e9fb1",
  },

  skillContainer: {
    display: "flex",
    flex: 3 / 4,
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "row",
    gap: "50px",
  },

  rowOne: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#2e9fb1",
    borderRadius: "18px",
  },

  rowTwo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  skillBoxContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "2vw",
  },

  skillBoxHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  skillsList: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
  },
};
