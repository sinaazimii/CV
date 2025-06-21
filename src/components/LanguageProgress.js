import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import theme from "./theme";

const LanguageProgress = ({ label, target, color = theme.dark.linkColor, isMobile }) => {
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
          height:"2vh",
          width: isMobile? "40vw":"10vw",
          marginLeft: "10px",
          marginBottom: "10px",
          backgroundColor: theme.dark.background,
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
