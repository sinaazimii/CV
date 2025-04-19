import { motion } from "framer-motion";
import SvgIcon from "./micros/Icon";
import Section from "./SectionWrapper";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => (
  <Section id="hero" bgColor="#f6f6f6" height={"100vh"}>
    <div className="text-center" style={styles.container}>
      <div style={styles.columnOne}>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          style={styles.capsule}
        >
          <i className="bi bi-dot"></i> Available for work
        </motion.div>

        <p style={styles.title}>
          <Typewriter
            words={["Hi, I'm a Frontend Developer"]}
            typeSpeed={90} // ⬅️ Slower = more dramatic letter-by-letter effect
            delaySpeed={2000}
          />
        </p>

        <p style={styles.subtitle}>
          I Recently graduated master student in Computer Science from a top
          university and ready to dedicate my full time focus to frontend
          development.
        </p>
      </div>
      <div style={styles.columnTwo}>
        <img src="/me.png" alt="Profile" style={{ width: "250px" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={styles.socialMediaContainer}
        >
          <a
            href="https://github.com/sinaazimii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgIcon
              svgPath="/github.svg"
              containerSize={"50px"}
              iconSize={"30px"}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sinaazimii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgIcon
              svgPath="/linkedin.svg"
              containerSize={"50px"}
              iconSize={"30px"}
            />
          </a>
          <a href="mailto:your.email@example.com?subject=Let's%20Talk&body=Hi%20Sina,%0D%0AI'm%20interested%20in%20your%20work!">
            <SvgIcon
              svgPath="/mail.svg"
              containerSize={"50px"}
              iconSize={"30px"}
            />
          </a>
        </motion.div>
      </div>
    </div>
  </Section>
);

export default Hero;

// define styles for this component
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    color: "#f6f6f6",
    height: "100vh",
    textAlign: "center",
  },
  columnOne: {
    display: "flex",
    flexDirection: "column",
    flex: 1 / 2,
    alignItems: "flex-start",
    textAlign: "start",
    margin: "50px",
  },
  columnTwo: {
    display: "flex",
    flexDirection: "column",
    flex: 1 / 2,
    alignItems: "center",
    justifyContent: "center",
    margin: "50px",
  },
  capsule: {
    backgroundColor: "#deecee",
    borderRadius: "12px",
    padding: "8px",
    color: "#409ca9",
    fontSize: "16px",
    marginBottom: "20px",
    boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#2e9fb1",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#2e9fb1",
  },
  socialMediaContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100px",
    width: "100px",
    justifyContent: "center",
    marginTop: "50px",
    textAlign: "start",
    gap: "20px",
    alignItems: "center",
  },
};
