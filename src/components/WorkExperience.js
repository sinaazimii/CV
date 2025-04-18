import Section from "./SectionWrapper";

const WorkExperience = () => (
  <Section id="work" bgColor="#f6f6f6" height={"100vh"}>
    <div style={styles.container}>
      <div style={styles.columnOne}>
        <p style={styles.title}>Work Samples</p>
      </div>

      <div style={styles.columnTwo}>
        <div style={styles.sampleBox}>
          <img
            src="/bnmodviz.png"
            alt="Sample 1"
            style={{ width: "100%", height: "100%", borderRadius: "12px" }}
          />
        </div>
        <div style={styles.sampleBox}>
          <img
            src="/cpt.png"
            alt="Sample 1"
            style={{ width: "100%", height: "100%", borderRadius: "12px" }}
          />
        </div>
      </div>
    </div>
  </Section>
);

export default WorkExperience;

// define styles for this component
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
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
    alignItems: "flex-start",
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
    height: "400px",
    width: "800px",
    backgroundColor: "#deecee",
    borderRadius: "12px",
    padding: "5px 10px",
    color: "#409ca9",
    fontSize: "16px",
    marginBottom: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
};
