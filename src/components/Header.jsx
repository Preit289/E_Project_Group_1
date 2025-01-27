import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";
import "../styles/components/Header.scss";
import "../../node_modules/boxicons/css/boxicons.min.css";
import logo from "../assets/img/keansburg-logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [visitCount, setVisitCount] = useState(0);
  const isInitialMount = useRef(true); // Biến cờ để kiểm soát lần render đầu tiên
  const [isTopNavbarHidden, setIsTopNavbarHidden] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
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
  useEffect(() => {
    const handleScroll = () => {
      // Remember measure height of top-Navbar again when edit Styles {100: 100px}
      if (window.scrollY > 53) {
        // Cuộn quá 100px thì ẩn
        setIsTopNavbarHidden(true);
        setIsNavbarFixed(true);
      } else {
        setIsTopNavbarHidden(false);
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup khi component unmount để tránh memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="Header">
        <div className={`top-Navbar ${isTopNavbarHidden ? "hidden" : ""}`}>
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
        <nav className={`Navbar ${isNavbarFixed ? "fixed" : ""}`}>
          <Link to="/">
            <i className="bx bxs-home"></i>
          </Link>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/" className="logo">
            <img src={logo} alt="Keanburg Park" />
          </Link>
          <Link to="/activity">Activity</Link>
          <Link to="/review">Review</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/tickets" className="buy-tickets">
            <i className="bx bxs-purchase-tag"></i>Tickets
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
