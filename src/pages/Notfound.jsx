import { useNavigate } from "react-router-dom";
const Notfound = () => {
  const navigate = useNavigate();
  const returnHomePage = () => {
    navigate("/");
  };
  return (
    <>
      <h1>404 Error</h1>
      <h4>This page could not be found </h4>
      <button onClick={returnHomePage}>Homepage</button>
    </>
  );
};

export default Notfound;
