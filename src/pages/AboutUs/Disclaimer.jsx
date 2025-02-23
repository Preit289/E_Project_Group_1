import { useEffect } from "react";
import "../../styles/pages/AboutUs/Disclaimer.scss";

const Disclaimer = () => {
  // Set the page title
  useEffect(() => {
    document.title = "Disclaimer | KEANSBURG PARK";
  }, []);

  return (
    <div className="Disclaimer-info">
      <div className="redBlock">
        <h2>Disclaimer</h2>
      </div>
      <p
        style={{
          fontSize: "15pt",
          padding: "50px 0",
          textAlign: "justify",
          lineHeight: "1.6",
        }}
      >
        <b>1. Purpose of This Website:</b>
        <br />
        This website is created for{" "}
        <strong>illustrative and educational purposes only</strong>. All
        information, images, and content on this website are intended for
        educational and practice purposes and do not represent an official
        website of Keansburg Amusement Park or any other organization. This
        website does not provide real services, is not related to any commercial
        activities, and is not responsible for any transactions or agreements.
        <br />
        <br />
        <b>2. Information on This Website:</b>
        <br />
        All information on this website, including but not limited to park
        hours, ticket prices, ride schedules, and events, is{" "}
        <strong>hypothetical and for illustrative purposes only</strong>. We do
        not guarantee the accuracy, completeness, or timeliness of this
        information. Information may change without prior notice.
        <br />
        <br />
        <b>3. User Responsibility:</b>
        <br />
        Users accessing this website must understand that this is an educational
        project and should not use the information on this website for
        real-world purposes. We are not responsible for any decisions or actions
        taken based on the information provided on this website.
        <br />
        <br />
        <b>4. Intellectual Property:</b>
        <br />
        All images, text, and designs on this website are used for educational
        and illustrative purposes. If any content infringes on intellectual
        property rights, please contact us immediately so we can remove or
        adjust it.
        <br />
        <br />
        <b>5. Limitation of Liability:</b>
        <br />
        We are not liable for any damages, losses, or risks arising from the use
        or access of this website. This website does not guarantee that external
        links (if any) will function continuously or provide accurate
        information.
        <br />
        <br />
        <b>6. Changes and Updates:</b>
        <br />
        We reserve the right to change, update, or remove any content on this
        website without prior notice. Users should check regularly for updates
        (if any).
        <br />
        <br />
        <b>7. Contact Us:</b>
        <br />
        If you have any questions or concerns about this website, please contact
        us at: <strong>info@keansburgamusementpark.com</strong>.
      </p>
    </div>
  );
};

export default Disclaimer;
