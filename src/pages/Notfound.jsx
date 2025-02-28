import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/pages/NotFound.scss";
import image404 from "../assets/img/404.png";
const Notfound = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "404 | KEANSBURG PARK";
  }, []);
  // Setup navigate when button is clicked
  const navigate = useNavigate();
  const returnHomePage = () => {
    navigate("/");
  };
  return (
    <>
      <div className="Notfound">
        <div className="titleNotfound">404 Error</div>
        <div className="messageNotfound">This page could not be found </div>
        <img src={image404} alt="404 not found" />
        <button id="ReturnHP" onClick={returnHomePage}>
          Homepage
        </button>
      </div>
    </>
  );
};

export default Notfound;
