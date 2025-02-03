import { useEffect } from "react";
import "../styles/pages/Activity.scss";
const Activity = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Activity | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="Activity">
        <p
          style={{
            fontSize: "15pt",
            padding: "50px 0px",
            textAlign: "justify",
            lineHeight: "1.6",
          }}
        >
          <b>(ActivityPage)</b> Embark on an adventure-filled journey through
          our Activity page, your comprehensive guide to the thrilling rides,
          captivating shows, and engaging attractions that make Keanburg
          Amusement Park an unforgettable destination. Step into a world of
          limitless possibilities, where every corner of our park offers a new
          and exciting experience waiting to be discovered. Our Activity page is
          designed to be your personal itinerary planner, providing you with the
          essential details about each of our park's offerings, ensuring your
          visit is filled with joy, laughter, and lasting memories. From
          heart-stopping roller coasters that challenge your courage to
          family-friendly adventures that ignite your imagination, we believe in
          the power of shared experiences, and we've carefully curated our
          activities to cater to guests of all ages and thrill levels. As you
          explore our digital landscape, you’ll uncover a wealth of information,
          including detailed descriptions of each ride, show schedules, and
          performance times, along with height restrictions and accessibility
          details. We understand that planning a day at an amusement park can be
          a large undertaking, which is why we’ve designed our Activity page to
          be both informative and user-friendly, making it easy for you to
          access all the resources you need for a seamless and enjoyable day.
          We've carefully organized each activity into themed sections, allowing
          you to explore our different categories and find the perfect
          experiences that match your interests and preferences. Our commitment
          to your enjoyment extends beyond the physical boundaries of the park,
          with this online portal helping you plan and prepare for a day of
          excitement and wonder, fostering a sense of anticipation and
          discovery. Here, you’ll discover not only what we offer but also the
          passion and dedication that drives us to continually improve and
          create new and exciting adventures for our valued guests. The design
          of our Activity page reflects the lively and welcoming atmosphere of
          the park, featuring clear descriptions and captivating images that
          draw you in and spark your imagination. Whether you’re a seasoned
          thrill-seeker or a first-time visitor, we encourage you to explore the
          various sections of our Activity page, from our most daring roller
          coasters to our gentle family rides, from our live shows to our
          special events. We are constantly adding new features and attractions,
          so be sure to check back frequently for updates and announcements. We
          invite you to dive into our online guide and start planning your
          unforgettable day. We believe that a visit to Keanburg is more than
          just a day at an amusement park; it's a chance to escape the ordinary,
          create cherished moments with friends and family, and embark on a
          journey filled with laughter, wonder, and unforgettable adventures.
          From the gentle sway of our classic carousel to the adrenaline rush of
          our most daring roller coaster, Keanburg Amusement Park offers
          something for everyone, and this page is your starting point for
          planning your perfect day. We hope you'll join us soon to experience
          the thrill, the excitement, and the genuine happiness that is
          Keanburg. We’re confident that you’ll leave our park with a smile on
          your face and memories that will last a lifetime. Thank you for
          exploring our activities, and we look forward to welcoming you to
          Keanburg!
        </p>
      </div>
    </>
  );
};

export default Activity;
