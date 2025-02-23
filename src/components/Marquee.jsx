import React, { useEffect, useRef, useState } from "react";
import "../styles/components/Marquee.scss";

const Marquee = () => {
  const marqueeTickerRef = useRef(null);
  const spanRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState("Fetching location...");

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

  // Function to get the current location using HTML5 Geolocation
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(
            `Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`
          );
        },
        (error) => {
          setLocation("Location permission denied or unavailable");
        }
      );
    } else {
      setLocation("Geolocation not supported by this browser");
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

    // Update time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Get location
    getLocation();

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup the listener on unmount
      clearInterval(intervalId); // Cleanup the interval on unmount
    };
  }, [windowWidth]);

  // Format the date and time
  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="MarqueeArea">
      <div className="MarqueeText" ref={marqueeTickerRef}>
        <span ref={spanRef}>
          {`Current Date: ${formattedDate} | Current Time: ${formattedTime} | Location: ${location}`}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
