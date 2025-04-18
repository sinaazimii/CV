import Section from './SectionWrapper';

const Languages = () => (
  <Section id="languages" bgColor="#f6f6f6">
    <div style={styles.container}>
      <div style={styles.columnOne}>
        <p style={styles.title}>Languages</p>
      </div>

      <div style={styles.columnTwo}>
        <div style={styles.sampleBox}>
          <p style={styles.languageTitle}>English</p>
          <p style={styles.languageTitle}>German</p>
          <p style={styles.languageTitle}>Persian</p>
        </div>

      </div>
  </div>
  </Section>
);

export default Languages;


const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start",
    color: "#f6f6f6",
    height: "35vh",
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
    height: "170px",
    width: "800px",
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "5px 10px",
    color: "#409ca9",
    fontSize: "16px",
    marginBottom: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    alignItems: "start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  languageTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    marginLeft: "10px",
  },

};
