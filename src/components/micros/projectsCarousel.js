import { title } from "framer-motion/client";
import { useState, useEffect } from "react";
import { useRef } from "react";


const ProjectsCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical for mobile breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;
  
    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.style.cursor = "grabbing"; // Set cursor on grab
    };
    
    const handleMouseLeave = () => {
      isDown = false;
      carousel.style.cursor = "grab"; // Reset cursor
    };
    
    const handleMouseUp = () => {
      isDown = false;
      carousel.style.cursor = "grab"; // Reset cursor
    };
  
    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      carousel.scrollLeft = scrollLeft - walk;
    };
  
    carousel.addEventListener("mousedown", handleMouseDown);
    carousel.addEventListener("mouseleave", handleMouseLeave);
    carousel.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      carousel.removeEventListener("mousedown", handleMouseDown);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
      carousel.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  const items = [
    {
      id: 1,
      title: "Bayesian Networks Modelling and Visualization Tool",
      description:
        "With User-Centric-Design implemented an intuitive tool for modelling Bayesian networks with various useful features and guides using React and Flask.",
      image: `${process.env.PUBLIC_URL}/bnmodviz.png`,
      size: isMobile
        ? { width: "69vw", height: "20vh" }
        : { width: "25vw", height: "30vh" },
    },
    {
      id: 2,
      title: "Probabilistic Modeling Tool",
      description:
        "Face lifted an existing tool with a new design and implemented a new features using React and Django to fill Conditional Probability Table.",
      image: `${process.env.PUBLIC_URL}/cpt.png`,
      size: isMobile
        ? { width: "69vw", height: "20vh" }
        : { width: "25vw", height: "30vh" },
    },
    {
      id: 3,
      title: "Bookstore",
      description:
        "An online bookstore application with a user-friendly interface, allowing users to browse, search, and purchase books.",
      image: `${process.env.PUBLIC_URL}/bookstore.jpg`,
      size: isMobile
        ? { width: "40vw", height: "40vh" }
        : { width: "15vw", height: "68vh" },
    },
  ];
  return (
    <div style={styles.container}>
      <div style={styles.carouselWrapper} ref={carouselRef}>
        {items.map((item) => (
          <div
            style={{
              ...styles.sampleCard,
              height: isMobile ? "60vh" : "80vh",
              width: isMobile ? "70vw" : "27vw",
            }}
            key={item.id}
          >
            <div style={styles.sampleImage}>
              <img
              draggable={false}
                src={item.image}
                alt={item.title}
                style={{
                  width: item.size.width,
                  height: item.size.height,
                  borderRadius: "10px",
                }}
              />
            </div>

            <div style={styles.sampleText}>
              <h3
                style={{
                  ...styles.title,
                  fontSize: isMobile ? "15px" : "20px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  ...styles.description,
                  fontSize: isMobile ? "10px" : "13px",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCarousel;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    position: "relative",
    width: "100%",
    height: "100%",
  },
  carouselWrapper: {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto", // Enable horizontal scrolling
    gap: "20px",
  },
  sampleCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "5px 10px",
    color: "#409ca9",
    fontSize: "16px",
    marginBottom: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    flexDirection: "column",
    flexShrink: 0,
  },
  sampleImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    marginBottom: "10px", // Add space between the image and text
    flex: 3.5 / 5,
  },
  sampleText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2e9fb1",
    textAlign: "center",
    flex: 1.5 / 5,
    // width: "400px",
  },
  title: {
    fontWeight: "bold",
    color: "#2e9fb1",
  },
  description: {
    color: "#333",
    textAlign: "center",
  },
};
