import { useEffect } from "react";
import "../styles/pages/HomePage.scss";
const HomePage = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Homepage | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="HomePage">
        <p
          style={{
            fontSize: "15pt",
            padding: "50px 0px",
            textAlign: "justify",
            lineHeight: "1.6",
          }}
        >
          <b>(HomePage)</b> Welcome to Keanburg Amusement Park, where thrills,
          laughter, and unforgettable memories come to life! Step into a world
          of vibrant colors, exhilarating rides, and captivating attractions,
          designed to spark joy and create lasting moments for guests of all
          ages. Our homepage is your gateway to an adventure-filled escape,
          providing you with a sneak peek into the magic that awaits within our
          park’s gates. From heart-stopping roller coasters to family-friendly
          adventures, Keanburg is the perfect destination for those seeking an
          extraordinary day out. We believe in the power of shared experiences,
          and we've carefully crafted every detail to ensure that every visit to
          our park is brimming with excitement and wonder. As you navigate our
          digital landscape, you’ll discover a wealth of information, including
          details about our thrilling rides, enchanting shows, delicious dining
          options, and convenient park amenities. We understand that planning a
          day at an amusement park can be an undertaking, which is why we’ve
          designed our homepage to be both informative and user-friendly, making
          it easy for you to access all the resources you need for an enjoyable
          and seamless experience. We’ve curated a blend of stunning visuals and
          clear descriptions, allowing you to get a taste of the action and
          ambiance that makes Keanburg so special. Our commitment to your
          enjoyment extends beyond the physical boundaries of the park; we
          believe in fostering a sense of community and providing exceptional
          service from the moment you arrive on our homepage. Here, you’ll
          discover not only what we offer but also the passion and dedication
          that drives us to continually improve and create new and exciting
          experiences for our valued guests. The design of our homepage reflects
          the lively and welcoming atmosphere of the park, featuring playful
          imagery and engaging typography that draws you in and sparks your
          imagination. Whether you’re a seasoned thrill-seeker or a first-time
          visitor, we encourage you to explore the various sections of our
          homepage, including our ride categories, special events, ticket
          pricing, and park hours. We are constantly adding new features and
          attractions, so be sure to check back frequently for updates and
          announcements. We invite you to dive into our online world and get a
          glimpse of the magic that awaits you. We believe that a visit to
          Keanburg is more than just a day at an amusement park; it's a chance
          to escape the ordinary, create cherished moments with friends and
          family, and embark on a journey filled with joy, wonder, and
          unforgettable experiences. From the gentle sway of our classic
          carousel to the adrenaline rush of our most daring roller coaster,
          Keanburg Amusement Park offers something for everyone. Our homepage is
          your starting point for planning your perfect day, and we hope you’ll
          join us soon to experience the thrill, the excitement, and the genuine
          happiness that is Keanburg. We’re confident that you’ll leave our park
          with a smile on your face and memories that will last a lifetime.
          Thank you for visiting, and we look forward to welcoming you to
          Keanburg!"
        </p>
      </div>
    </>
  );
};

export default HomePage;
