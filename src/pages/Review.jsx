import { useEffect } from "react";
import "../styles/pages/Review.scss";
const Review = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Review | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="Review">
        <p
          style={{
            fontSize: "15pt",
            padding: "50px 0px",
            textAlign: "justify",
            lineHeight: "1.6",
          }}
        >
          <b>(ReviewPage)</b> Delve into the authentic experiences of fellow
          adventurers through our Review page, your gateway to unfiltered
          feedback and genuine perspectives on Keanburg Amusement Park. Step
          into a space where the voices of our valued guests come alive, sharing
          their stories of thrills, laughter, and unforgettable moments. Our
          Review page is designed to be a trusted resource, providing you with
          real-life insights into the park’s diverse offerings and helping you
          make informed decisions as you plan your visit. From candid
          descriptions of the park's most daring roller coasters to heartfelt
          reflections on family-friendly attractions, you’ll find a wealth of
          feedback from guests of all ages and backgrounds. We believe in the
          power of shared experiences, and this page is dedicated to fostering
          transparency and community, allowing you to learn from the adventures
          of others. As you explore our digital landscape, you’ll uncover a
          spectrum of reviews, spanning detailed accounts of specific rides and
          shows to more general impressions of the overall park experience. We
          understand that planning a day at an amusement park is an undertaking,
          which is why we’ve designed our Review page to be both comprehensive
          and user-friendly, making it easy for you to navigate and find the
          information that is most relevant to your interests. We encourage you
          to browse through the various sections, filter reviews by activity
          type or rating, and discover the different viewpoints that make up the
          Keanburg experience. Our commitment to your enjoyment extends beyond
          the physical boundaries of the park, with this online space providing
          you with the knowledge and confidence you need to create your own
          perfect day. Here, you’ll discover not only what our guests have to
          say but also the passion and dedication that drives us to continually
          improve and create new and exciting experiences for our valued guests.
          The design of our Review page reflects the lively and welcoming
          atmosphere of the park, featuring clear layouts and intuitive
          navigation that encourage you to explore and engage with the content.
          Whether you’re a seasoned thrill-seeker looking for tips on the best
          rides or a first-time visitor seeking advice on family-friendly
          activities, we invite you to delve into the insights offered by our
          community. We are constantly working to improve our platform and
          provide you with the most up-to-date and accurate feedback. We invite
          you to explore our online collection of reviews, and learn from the
          shared experiences of others as you plan your next adventure. We
          believe that a visit to Keanburg is more than just a day at an
          amusement park; it’s a chance to escape the ordinary, create cherished
          moments with friends and family, and embark on a journey filled with
          joy, wonder, and unforgettable experiences. From the gentle sway of
          our classic carousel to the adrenaline rush of our most daring roller
          coaster, Keanburg Amusement Park offers something for everyone, and
          this page is your guide to discovering it all. We hope you’ll use this
          valuable resource as you plan your day, and we look forward to
          welcoming you to Keanburg soon. We’re confident that you’ll leave our
          park with a smile on your face and memories that will last a lifetime.
          Thank you for exploring our reviews, and we look forward to seeing you
          at Keanburg!
        </p>
      </div>
    </>
  );
};

export default Review;
