import { useEffect, useState } from "react";
import "./Robot.css";

function Robot() {
  const [blink, setBlink] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Automatic blinking
  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setBlink(true);

      setTimeout(() => {
        setBlink(false);
      }, 180);
    }, 3500);

    return () => clearInterval(blinkTimer);
  }, []);

  const handleRobotClick = () => {
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 1800);
  };

  return (
    <div className="robot-wrapper">
      {clicked && (
        <div className="robot-message">
          Hi! Welcome to my portfolio 👋
        </div>
      )}

      <button
        className={`robot ${clicked ? "robot-active" : ""}`}
        onClick={handleRobotClick}
        aria-label="Interactive portfolio robot"
      >
        <div className="robot-antenna">
          <span></span>
        </div>

        <div className="robot-head">
          <div className={`robot-eye ${blink ? "blink" : ""}`}></div>
          <div className={`robot-eye ${blink ? "blink" : ""}`}></div>

          <div className="robot-mouth">
            {clicked ? "◡" : "•"}
          </div>
        </div>

        <div className="robot-neck"></div>

        <div className="robot-body">
          <div className="robot-chest">
            <span>AI</span>
          </div>

          <div className="robot-arm left-arm"></div>
          <div className="robot-arm right-arm"></div>
        </div>

        <div className="robot-shadow"></div>
      </button>
    </div>
  );
}

export default Robot;