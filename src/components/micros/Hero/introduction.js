  import { Typewriter } from "react-simple-typewriter";
  import { motion } from "framer-motion";
  import SvgIcon from "../Icon";
import theme from "../../theme";

  const Introduction = ({isMobile}) => {
    return <>
      {/* <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        style={{ ...styles.capsule}}
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.2)" }}
      >
        <span style={{ fontSize: "15px" }}>
          Available for Work
        </span>
      </motion.div> */}
      <p style={styles.title}>Sina Azimi</p>

      <div style={styles.titleContainer}>
        <p
          style={{
            ...styles.title,
            fontSize: isMobile ? "1.5rem" : "3rem",
            fontWeight: "lighter",
          }}
        >
          <Typewriter
            words={["Hi, I'm a Frontend Developer"]}
            typeSpeed={90}
            delaySpeed={2000} />
        </p>
      </div>
      <p
        style={{
          ...styles.subtitle,
          fontSize: isMobile ? "1rem" : "1.5rem",
        }}
      >
        Recently graduated master student in Computer Science from a top
        university and ready to dedicate my full time focus to frontend
        development.
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        style={{
          ...styles.socialMediaContainer,
          marginTop: isMobile ? "0px" : "20px",
        }}
      >
        <a
          href="https://github.com/sinaazimii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgIcon
            svgPath={`${process.env.PUBLIC_URL}/github.svg`}
            containerSize={"50px"}
            iconSize={"30px"} />
        </a>
        <a
          href="https://www.linkedin.com/in/sinaazimii/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgIcon
            svgPath={`${process.env.PUBLIC_URL}/linkedin.svg`}
            containerSize={"50px"}
            iconSize={"30px"} />
        </a>
        <a href="mailto:sinaazimisd@gmail.com?subject=Let's%20Talk&body=Hi%20Sina,%0D%0AI'm%20interested%20in%20your%20work!">
          <SvgIcon
            svgPath={`${process.env.PUBLIC_URL}/mail.svg`}
            containerSize={"50px"}
            iconSize={"30px"} />
        </a>
      </motion.div>
    </>;
  }

  export default Introduction;

  const styles = {
    titleContainer: {
      display: "flex",
      height: "100px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
    },
    capsule: {
      backgroundColor: "#deecee",
      borderRadius: "12px",
      padding: "8px",
      color: "#409ca9",
      margin: "10px",
      boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      border: "1px solid #409ca9",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: theme.dark.color,
    },
    subtitle: {
      fontSize: "1.5rem",
      color: theme.dark.color,
    },
    socialMediaContainer: {
      display: "flex",
      flexDirection: "row",
      height: "100px",
      justifyContent: "center",
      textAlign: "start",
      gap: "1vw",
      alignItems: "center",
    },
  };



