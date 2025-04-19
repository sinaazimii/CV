import Section from "./SectionWrapper";
import { motion } from "framer-motion";
import SkillGroup from "./micros/skillGroup";

const languages = ["JavaScript", "Python", "Java", "HTML", "CSS"];

const tools = ["Git", "Docker", "Jira", "Figma"];

const frameworks = ["React", "React Native", "Flutter", "Bootstrap"];

const softSkills = [
  "Focused",
  "Detail-oriented",
  "Communication",
  "Problem-solving",
];

const Skills = () => (
  <Section id="skills" bgColor="#f6f6f6" height={"100vh"}>
    <div>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={styles.rowOne}
        >
          <p style={styles.explain}>
            I bring a solid foundation built through a strong academic
            background, hands-on projects, and professional work experience. I'm
            passionate about solving complex challenges and take pride in
            developing responsive, intuitive, and user-centered applications
            that deliver real value.
          </p>
        </motion.div>
      </div>

      <div style={styles.rowTwo}>
        <div style={styles.titleContainer}>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            style={styles.title}
          >
            Skills
          </motion.h2>
        </div>

        <div style={styles.skillContainer}>
          <div style={styles.skillBoxContainer}>

            <SkillGroup
              title="Languages"
              icon="/code.svg"
              skillList={languages}
            />
            <SkillGroup
              title="Tools"
              icon="/gear.svg"
              skillList={tools}
            />
          </div>
          <div style={styles.skillBoxContainer}>
              <SkillGroup
                title="Frameworks"
                icon="/framework.svg"
                skillList={frameworks}
              />
              <SkillGroup
                title="Soft Skills"
                icon="/people.svg"
                skillList={softSkills}
              />

          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Skills;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#f6f6f6",
    padding: "20px",
  },

  explain: {
    textAlign: "start",
    fontSize: "31px",
    color: "white",
    margin: "20px",
  },

  titleContainer: {
    display: "flex",
    flex: 1 / 4,
    alignItems: "start",
    justifyContent: "center",
    // marginLeft: "20px",
  },

  title: {
    fontSize: "60px",
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
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "20px",
    height: "300px",
    width: "85%",
    backgroundColor: "#2e9fb1",
    borderRadius: "18px",
    marginBottom: "100px",
  },

  rowTwo: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    margin: "20px",
  },

  skillBoxContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "20px",
  },

  skillBox: {
    height: "150px",
    width: "500px",
    backgroundColor: "#deecee",
    borderRadius: "12px",
    padding: "5px 10px",
    color: "#409ca9",
    fontSize: "16px",
    marginBottom: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
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
