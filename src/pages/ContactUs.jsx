import { useEffect } from "react";
import "../styles/pages/ContactUs.scss";
const ContactUs = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Contact Us | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="ContactUs">
        <p
          style={{
            fontSize: "15pt",
            padding: "50px 0px",
            textAlign: "justify",
            lineHeight: "1.6",
          }}
        >
          <b>(ContactUsPage)</b> Connect with us and let us be your guide on
          your journey to the excitement and wonder of Keanburg Amusement Park
          through our dedicated Contact Us page. Step into a space designed to
          facilitate clear and efficient communication, ensuring your questions
          are answered and your needs are met with promptness and care. Our
          Contact Us page is your direct line to our friendly and knowledgeable
          team, providing you with various avenues to reach us, allowing you to
          easily access any information or assistance you may require. From
          general inquiries to specific requests, we believe in providing
          exceptional service, and we've carefully curated our contact options
          to ensure you receive the support you need. As you explore our digital
          landscape, you’ll find all the essential details for reaching us,
          including our phone number, email address, a convenient contact form
          for submitting your questions, and our physical address. We understand
          that planning a visit to an amusement park can bring about various
          inquiries, which is why we’ve designed our Contact Us page to be both
          informative and user-friendly, making it easy for you to find the most
          suitable way to connect with us. We’ve organized the information
          clearly, providing all the details you need to reach us efficiently.
          Our commitment to your enjoyment extends beyond the physical
          boundaries of the park, with this online portal serving as your direct
          connection to us, allowing you to share your questions, comments, or
          concerns with ease. Here, you’ll discover not only the different
          methods of contacting us, but also the passion and dedication that
          drives us to provide you with exceptional support throughout your
          journey. The design of our Contact Us page reflects the lively and
          welcoming atmosphere of the park, featuring clear labels, engaging
          icons, and a simple design that guides you to the information you are
          seeking. Whether you’re a first-time visitor looking for directions to
          the park or a loyal guest with questions about our attractions, we
          encourage you to utilize the various methods provided, confident that
          your inquiry will be met with a swift and helpful response. We are
          continuously improving our communication channels to ensure the best
          possible service for our valued guests. We invite you to reach out to
          us with any questions or concerns you may have, and let us help you
          create unforgettable memories at Keanburg. We believe that a visit to
          Keanburg is more than just a day at an amusement park; it’s a chance
          to escape the ordinary, create cherished moments with friends and
          family, and embark on a journey filled with joy, wonder, and
          unforgettable experiences. From the gentle sway of our classic
          carousel to the adrenaline rush of our most daring roller coaster,
          Keanburg Amusement Park offers something for everyone, and this page
          is your direct line to our team. We hope you’ll find the information
          you need and reach out to us with confidence. We’re confident that
          you’ll leave our park with a smile on your face and memories that will
          last a lifetime. Thank you for considering Keanburg, and we look
          forward to hearing from you soon!
        </p>
      </div>
    </>
  );
};

export default ContactUs;
