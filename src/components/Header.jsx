import React, { useState, useLayoutEffect, useRef, useCallback } from "react";
import "../styles/components/Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  const [visitCount, setVisitCount] = useState(0);
  const isInitialMount = useRef(true); // Biến cờ để kiểm soát lần render đầu tiên
  // Load visit count from localStorage and increment it
  useLayoutEffect(() => {
    if (isInitialMount.current) {
      // Chỉ chạy logic này ở lần render đầu tiên
      const storedVisitCount = localStorage.getItem("page_view");
      if (storedVisitCount) {
        const newCount = Number(storedVisitCount) + 1; // Tăng giá trị lên 1
        setVisitCount(newCount);
        localStorage.setItem("page_view", newCount);
      } else {
        setVisitCount(1); // Nếu không có giá trị, đặt thành 1
        localStorage.setItem("page_view", 1);
      }
      isInitialMount.current = false; // Đánh dấu đã render lần đầu
    }
  }, []);

  // Reset visit count to 0
  const handleReset = useCallback(() => {
    localStorage.setItem("page_view", 0); // Đặt lại giá trị trong localStorage thành 0
    setVisitCount(0); // Đặt lại visitCount thành 0
  }, []);

  return (
    <>
      <div className="Header">
        <div className="top-Navbar">
          <div className="info-contact">Info Contact</div>
          <div className="flag-lang">Lang</div>
          <div className="social-icon">Social</div>
          <div>Visitor Count Area</div>
        </div>
        <nav className="Navbar">
          <Link to="/">Svg of Homepage</Link>
          <Link to="/" className="logo">
            Logo
          </Link>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/activity">Activity</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="/contactus">Contact Us</Link>
        </nav>
        <div className="visitor-count">
          <div>Visitor count:</div>
          <div className="website-counter">{visitCount}</div>
          <button id="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
