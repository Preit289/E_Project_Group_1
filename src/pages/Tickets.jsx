import { useEffect } from "react";
import "../styles/pages/Tickets.scss";
const Tickets = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Tickets | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="Tickets">
        <p
          style={{
            fontSize: "15pt",
            padding: "50px 0px",
            textAlign: "justify",
            lineHeight: "1.6",
          }}
        >
          <b>(TicketsPage)</b> Unlock the gateway to an unforgettable adventure
          with our Tickets page, your portal to securing your pass to the
          thrills, laughter, and magic of Keanburg Amusement Park. Step into a
          world of exciting possibilities, where planning your perfect day is
          just a few clicks away. Our Tickets page is designed to be a seamless
          and user-friendly experience, providing you with all the information
          you need to choose the best ticket option for your needs, ensuring
          your visit to Keanburg is as easy and enjoyable as possible. From
          single-day passes that let you dive straight into the action to
          multi-day packages that offer extended exploration, we believe in
          providing options for every adventurer, and we've carefully curated
          our ticket offerings to cater to guests of all ages and preferences.
          As you navigate our digital landscape, you’ll discover a range of
          choices, including different ticket tiers, pricing details, any
          available discounts or special offers, and any requirements for entry.
          We understand that planning a day at an amusement park can be an
          undertaking, which is why we’ve designed our Tickets page to be both
          informative and intuitive, making it simple for you to access all the
          resources you need for a seamless and stress-free booking experience.
          We've carefully organized each ticket option into clear categories,
          allowing you to compare benefits, prices, and availability. Our
          commitment to your enjoyment extends beyond the physical boundaries of
          the park, with this online portal offering you the convenience and
          flexibility of booking your entry in advance, saving you valuable time
          and ensuring your day is filled with excitement, not logistical
          stress. Here, you’ll discover not only the different ticket types but
          also the passion and dedication that drives us to provide you with a
          hassle-free experience from start to finish. The design of our Tickets
          page reflects the lively and welcoming atmosphere of the park,
          featuring clear descriptions and engaging visuals that guide you
          through the booking process. Whether you’re a seasoned visitor looking
          for the most cost-effective way to enjoy the park or a first-time
          guest who's unsure of the best option for your group, we encourage you
          to explore the various sections of our Tickets page, and confidently
          secure your adventure. We are constantly updating our offerings to
          provide you with the best possible value, so be sure to check back
          frequently for updates and new deals. We invite you to explore our
          online ticket options and take the first step towards creating your
          unforgettable memories at Keanburg. We believe that a visit to
          Keanburg is more than just a day at an amusement park; it's a chance
          to escape the ordinary, create cherished moments with friends and
          family, and embark on a journey filled with joy, wonder, and
          unforgettable adventures. From the gentle sway of our classic carousel
          to the adrenaline rush of our most daring roller coaster, Keanburg
          Amusement Park offers something for everyone, and this page is your
          starting point for planning your perfect day. We hope you’ll secure
          your ticket with ease and join us soon to experience the thrill, the
          excitement, and the genuine happiness that is Keanburg. We’re
          confident that you’ll leave our park with a smile on your face and
          memories that will last a lifetime. Thank you for exploring our
          tickets, and we look forward to welcoming you to Keanburg!
        </p>
      </div>
    </>
  );
};

export default Tickets;
