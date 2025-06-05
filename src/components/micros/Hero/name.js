import {motion} from "framer-motion";

const  MyName = ({isMobile}) => {
  return <motion.div
    initial={{ width: 0 }}
    animate={{ width: isMobile ? "90vw" : "60vw" }}
    transition={{ duration: 1, ease: "easeInOut" }}
    style={{
      ...styles.headerContainer,
      height: isMobile ? "50px" : "100px",
    }}
  >
    <h2
      style={{
        fontSize: isMobile ? "8vw" : "2vw",
        color: "#f6f6f6",
        fontWeight: "bold",
        whiteSpace: "nowrap",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      Seyed Sina Azimi
    </h2>
  </motion.div>;
}

export default MyName;

const styles = {
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#2e9fb1",
    position: "absolute",
    top: "10px",
    borderRadius: "12px",
    color: "#f6f6f6",
    fontSize: "16px",
    marginBottom: "20px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
  },
};



