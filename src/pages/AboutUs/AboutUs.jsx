import { useEffect } from "react";
import "../../styles/pages/AboutUs/AboutUs.scss";
const AboutUs = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "About Us | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="AboutUs">
        <h1>Introduction</h1>
        <p
          style={{
            fontSize: "15pt",
            padding: "50px 0px",
            textAlign: "justify",
            lineHeight: "1.6",
          }}
        >
          Welcome to Keanburg Amusement Park, your premier destination for
          thrilling adventures and unforgettable memories! Our homepage is your
          gateway to a world of vibrant colors, exhilarating rides, and
          captivating attractions, meticulously designed to spark joy and create
          lasting moments for guests of all ages. Step inside and explore the
          magic that awaits within our park’s gates, from heart-stopping roller
          coasters to family-friendly escapades. We believe in the power of
          shared experiences and have crafted every detail to ensure that each
          visit to Keanburg is brimming with excitement and wonder. Discover our
          digital landscape to uncover a wealth of information, including rides,
          shows, dining, and park amenities, all designed to make your planning
          seamless and enjoyable. We invite you to dive into our online world
          and experience the very essence of what makes Keanburg so special: the
          thrill, the excitement, and the genuine happiness.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
