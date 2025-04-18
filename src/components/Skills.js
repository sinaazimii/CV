import Section from "./SectionWrapper";
import SvgIcon from "./Icon";

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
  <Section id="skills" bgColor="#f6f6f6" height={'100vh'}>
    <div>
      <div style={styles.container}>
      <div style={styles.rowOne}>
        <p style={styles.explain}>
        I bring a solid foundation built through a strong academic background, hands-on projects, and professional work experience. I'm passionate about solving complex challenges and take pride in developing responsive, intuitive, and user-centered applications that deliver real value.
        </p>
      </div>
      </div>

      <div style={styles.rowTwo}>
        <div style={styles.titleContainer}>
          <h2 style={styles.title}>Skills</h2>
        </div>

        <div style={styles.skillContainer}>
          <div style={styles.skillBoxContainer}>
            <div style={styles.skillBox}>
              <div style={styles.skillBoxHeader}>
                <SvgIcon svgPath="/code.svg" />
                <p style={{ margin: "10px" }}>Languages</p>
              </div>
              <div style={styles.skillsList}>
                {languages.map((tool) => (
                  <p key={tool} style={{ margin: "10px" }}>
                    {tool}
                  </p>
                ))}
              </div>
            </div>

            <div style={styles.skillBox}>
              <div style={styles.skillBoxHeader}>
                <SvgIcon svgPath="/gear.svg" />
                <p style={{ margin: "10px" }}>Tools</p>
              </div>
              <div style={styles.skillsList}>
                {tools.map((tool) => (
                  <p key={tool} style={{ margin: "10px" }}>
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.skillBoxContainer}>
            <div style={styles.skillBox}>
              <div style={styles.skillBoxHeader}>
                <SvgIcon svgPath="/framework.svg" />
                <p style={{ margin: "10px" }}>Frameworks</p>
              </div>
              <div style={styles.skillsList}>
                {frameworks.map((tool) => (
                  <p key={tool} style={{ margin: "10px" }}>
                    {tool}
                  </p>
                ))}
              </div>
            </div>
            <div style={styles.skillBox}>
              <div style={styles.skillBoxHeader}>
                <SvgIcon svgPath="/people.svg" />
                <p style={{ margin: "10px" }}>Soft Skills</p>
              </div>
              <div style={styles.skillsList}>
                {softSkills.map((tool) => (
                  <p key={tool} style={{ margin: "10px" }}>
                    {tool}
                  </p>
                ))}
              </div>
            </div>
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
