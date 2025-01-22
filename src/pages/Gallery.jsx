import { useEffect } from "react";
import "../styles/pages/Gallery.scss";
const Gallery = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Gallery | KEANSBURG PARK";
  }, []);
  return (
    <>
      <h1>Gallery</h1>
      <p
        style={{
          fontSize: "50px",
          padding: "0px",
          textAlign: "justify",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    </>
  );
};

export default Gallery;
