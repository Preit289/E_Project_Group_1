import React, { useEffect, useRef, useState } from "react";
import "../styles/components/Marquee.scss";
const Marquee = () => {
  const marqueeTickerRef = useRef(null);
  const spanRef = useRef(null);

  // Add a state variable to trigger re-render
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to calculate and update CSS variable
  const calculateX = () => {
    const marqueeTicker = marqueeTickerRef.current;
    const span = spanRef.current;
    if (marqueeTicker && span) {
      const marqueeWidth = marqueeTicker.offsetWidth;
      const x = marqueeWidth;
      span.style.setProperty("--x", `${x}px`);
    }
  };

  useEffect(() => {
    calculateX(); // Initial calculation on mount

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update state to trigger re-render
      calculateX();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup the listener on unmount
    };
  }, [windowWidth]);
  return (
    <>
      <div className="MarqueeArea">
        <div className="MarqueeText" ref={marqueeTickerRef}>
          <span ref={spanRef}>Here is scrolling continous ticker sample</span>
        </div>
      </div>
    </>
  );
};

export default Marquee;
