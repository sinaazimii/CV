import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "react-bootstrap";

const LanguageProgress = ({ label, target, color = "#2e9fb1", isMobile }) => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setProgress(current);
        if (current >= target) clearInterval(interval);
      }, 10);
    } else {
      setProgress(0); // reset on leave
    }
  }, [visible, target]);

  return (
    <div ref={ref}>
      <ProgressBar
        now={progress}
        style={{
          height: isMobile? "15px":"20px",
          width: isMobile? "170px":"250px",
          marginLeft: "10px",
          marginBottom: "10px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
            transition: "width 0.5s ease",
          }}
        />
      </ProgressBar>
    </div>
  );
};

export default LanguageProgress;
