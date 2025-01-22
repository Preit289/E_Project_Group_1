import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/pages/NotFound.scss";
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
      <h1>404 Error</h1>
      <h4>This page could not be found </h4>
      <button id="ReturnHP" onClick={returnHomePage}>
        Homepage
      </button>
    </>
  );
};

export default Notfound;
