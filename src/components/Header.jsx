import React, { useState, useLayoutEffect, useRef, useCallback } from "react";
import "../styles/components/Header.scss";
import "../../node_modules/boxicons/css/boxicons.min.css";
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
          <div className="social-icon">Social</div>
          <div className="SearchArea">Search icon</div>
          <div className="visitor-count">
            <div>Visitor count:</div>
            <div className="website-counter">{visitCount}</div>
            <button
              //   Remember block code after remove Reset button
              style={{
                backgroundColor: "red", // background -> backgroundColor
                color: "white", // Màu chữ
                padding: "3px 20px", // Khoảng cách bên trong nút
                margin: "0px 0px 10px 5px",
                border: "none", // Loại bỏ viền
                borderRadius: "5px", // Bo góc
                cursor: "pointer", // Hiển thị con trỏ khi di chuột qua
              }}
              id="reset"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
        <nav className="Navbar">
          <Link to="/">
            <i className="bx bxs-home"></i>
          </Link>
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
      </div>
    </>
  );
};

export default Header;
