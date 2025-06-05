import React, { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Introduction" },
  // { id: "skills", label: "Skills" },
  { id: "work-experience", label: "Work Experience" },
  { id: "work-samples", label: "Work Samples" },
  { id: "education", label: "Education" },
];

const ScrollNav = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={styles.navContainer}>
      {sections.map((sec) => (
        <div
          key={sec.id}
          onClick={() => scrollTo(sec.id)}
          style={{
            ...styles.navItem,
            backgroundColor: active === sec.id ? "#2e9fb1" : "#deecee",
            color: active === sec.id ? "#fff" : "#2e9fb1",
          }}
        >
          {sec.label}
        </div>
      ))}
    </div>
  );
};

export default ScrollNav;

const styles = {
  navContainer: {
    position: "fixed",
    top: "50%",
    right: "30px",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1000,
  },
  navItem: {
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  },
};
